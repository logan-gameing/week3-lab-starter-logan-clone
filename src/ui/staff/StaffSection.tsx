import Section from "../components/Section";
import StaffList from "../staff/StaffList";

export default function StaffSection() {
  // TODO: Write the tsx code to render a Section component
  // Inside the Section, render the StaffList component
  return (
    <Section
      title="Campus Staff"
      subtitle="Learn about our beloved campus staff"
    >
      <StaffList />
    </Section>
  );
}
