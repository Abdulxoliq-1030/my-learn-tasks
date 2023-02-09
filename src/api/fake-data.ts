import { v4 as uuidv4 } from "uuid";

export interface UserType {
	id: any;
	name: string;
	username: string
}

export const UsersData = [
	{
		id: uuidv4(),
		name: "Leanne Graham",
		username: "Bret"
	},
	{
		id: uuidv4(),
		name: "Ervin Hovel",
		username: "Antonette"
	},
	{
		id: uuidv4(),
		name: "Clementine Bauch",
		username: "clementine"
	},
	{
		id: uuidv4(),
		name: "Alex Fergusson",
		username: "Fergusson"
	},
	{
		id: uuidv4(),
		name: "Josep Gvardiola",
		username: "Antuan"
	},
	{
		id: uuidv4(),
		name: "Leo Messi",
		username: "Alexis"
	},
	{
		id: uuidv4(),
		name: "CR Ronaldo",
		username: "Cristiano"
	},
];