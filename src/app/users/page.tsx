import { Metadata } from "next";
import getAllUsers from "../../../lib/getAllUsers";
import {Users} from "../../../models/User";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<Users[]> = getAllUsers();
  const users = await usersData;
  const showUsers = (
    <ul>
        {users.map((el) => (
          <Link className="block" href={`users/${el.id}`} key={el.name}>
            {el.name}
          </Link>
        ))}
      
    </ul>
  );

  return showUsers;
}
