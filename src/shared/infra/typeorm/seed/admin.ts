import { hash } from "bcrypt";
import { getConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, password, email, driver_license, is_admin, created_at)
     VALUES('${id}', 'admin', '${password}', 'admin@rentx.com.br', 'ASD-123', true, 'now()')
    `
  );

  await connection.close();
}

create().then(() => console.log("User admin created!"));
