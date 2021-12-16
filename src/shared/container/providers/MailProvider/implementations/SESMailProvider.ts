import { injectable } from "tsyringe";
import nodemailer, { Transporter } from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import { SES } from "aws-sdk";

import { IMailProvider } from "../IMailProvider";

@injectable()
class SESMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    this.createClient();
  }

  private async createClient() {
    try {
      this.client = nodemailer.createTransport({
        SES: new SES({
          apiVersion: "2010-12-01",
          region: process.env.AWS_REGION,
        }),
      });
    } catch (err) {
      console.error(`SESMailProvider - Error:\n${err}`);
    }
  }

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {
    if (!this.client) {
      await this.createClient();
    }

    const templateFileContent = fs.readFileSync(path).toString("utf-8");

    const templateParse = handlebars.compile(templateFileContent);

    const templateHtml = templateParse(variables);

    await this.client.sendMail({
      to,
      from: "Rentx <josilenevitoriasilva@gmail.com>",
      subject,
      html: templateHtml,
    });
  }
}

export { SESMailProvider };
