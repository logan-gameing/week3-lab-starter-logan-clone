import type { Staff } from "../types/staff";

export const staff: Staff[] = [
  {
    id: 0,
    name: "Bob Jones",
    role: "Instructor",
    school: "School of Business",
    officelocation: "Building C, Room 403",
    specialties: ["Coding", "Data Management"],
    funfact: "Never has done anything interesting ever.",
  },
  {
    id: 1,
    name: "Alice Michaela",
    role: "Advisor",
    school: "School of Business",
    officelocation: "Building A, Room 100",
    specialties: ["Student Advisor"],
    funfact: "Drove a monster truck",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Program Chair",
    school: "School of Business",
    officelocation: "Building A, Room 501",
    specialties: ["Business Management"],
    funfact: "Married to Alice.",
  },
  {
    id: 3,
    name: "Jane Doe",
    role: "Instructor",
    school: "MacPhail School of Energy",
    officelocation: "Building D, Room 111",
    specialties: ["Energy Saving & Consumption"],
    startyear: "January 3rd, 2001",
  },
  {
    id: 4,
    name: "Keith Walts",
    role: "Instructor",
    school: "School of Health and Public Safety",
    officelocation: "Building A, Room 303",
    specialties: ["Health Care 101", "Safety 101"],
    email: "keithwalts@healthandsafety.ca",
  },
];
