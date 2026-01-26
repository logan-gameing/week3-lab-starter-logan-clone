import Section from "@/src/ui/components/Section";
import ProgramList from "./ProgramList";

export default function ProgramsSection() {
  // TODO: Write the tsx code to render a Section component
  // Inside the Section, render the ProgramList component
  return (
    <Section title={ProgramList.name}>
      <ProgramList></ProgramList>
    </Section>
  );
}
