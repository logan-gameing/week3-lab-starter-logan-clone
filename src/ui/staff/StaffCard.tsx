import { Staff } from "@/src/types/staff";
import { Pressable, StyleSheet, Text, View } from "react-native";

// TODO: Make a Props type for the props of our StaffCard component

type Props = { staff: Staff };

// TODO: Make a FunFact component that takes an optional text prop (no need for a type for this prop, just use inline typing)
// This prop is a helper that will render null if no text is provided or if the text is an empty string (or only whitespace, use .trim() to check).
// If there is text, render a Text component with the style styles.funFact that displays "Fun fact: " followed by the text prop.

// how to make optional text?

function FunFact({ funfact }: { funfact: string | undefined }) {
  if (funfact != undefined && funfact != "") {
    return <Text style={styles.funFact}> Funfact: {funfact} </Text>;
  }
  return null;
}

export default function StaffCard({ staff }: Props) {
  // TODO: Use descructuring to extract values from the person
  // If values need to be modified or altered for display (ex: a default value added if no office is specified),
  // you can do that directly in the tsx code below, or create new variables here
  // if the values will be used in the log function as well, create variables for them here

  const {
    id,
    name,
    role,
    school,
    email,
    startyear,
    specialties,
    funfact,
    // courseids,
  } = staff;

  // TODO: Create a function called logStaffInfo that logs a formatted summary of the staff member to the console
  // Example output:
  // Staff: Jane Doe | Instructor | School of Advanced Digital Technology | Office: Room 101
  // Started: 2015
  // Teaches: CPRG 101, CPRG 202 (once the field has been added)
  // Specialties: Web Development, Mobile Development, UI/UX Design
  // Fun fact: I once climbed Mount Everest.

  function logStaffInfo() {
    console.log(
      "Staff: " + staff.name,
      "| " + staff.role,
      "| " + staff.school,
      "| " + staff.email,
      "| " + staff.startyear,
      "| " + staff.specialties,
      "| " + staff.funfact,
      // "| " + staff.courseids,
    );
  }

  // TODO: Create the TSX for the staff card layout
  // There should be a Pressable as the root element, with onPress set to the logStaffInfo function created above
  // Inside the Pressable, create the following elements:
  // A View for the top row, containing:
  //   A Text for the staff member's name
  //   A Text for the staff member's role (this will act as a badge)
  // A Text for the school name
  // A Text for the office location (or "Office: N/A" if none is specified)
  // If there is a start year, a Text for the start year
  // A Text for the courses they teach (or "Teaches: N/A" if none are specified) (once that field has been added to the Staff interface)
  // A Text for the specialties (display only the first three specialties, separated by commas)
  // The FunFact component created above, passing in the fun fact text

  return (
    <Pressable style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.name}>Name: {staff.name}</Text>
        <Text style={styles.badge}>Role: {staff.role}</Text>
      </View>
      <Text>School: {staff.school}</Text>
      <Text>Office: {staff.officelocation}</Text>
      {staff.startyear && <Text>Start Year: {staff.startyear}</Text>}
      {/* <Text>Teaches: {staff.courseids}</Text> */}
      <Text>Specialties: {staff.specialties}</Text>
      <FunFact funfact={staff.funfact} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    gap: 6,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
  },
  badge: {
    fontSize: 12,
    opacity: 0.75,
  },
  meta: {
    fontSize: 12,
    opacity: 0.75,
  },
  funFact: {
    marginTop: 2,
    fontSize: 12,
    opacity: 0.65,
  },
});
