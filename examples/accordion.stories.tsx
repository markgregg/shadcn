import type { Story } from '@ladle/react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../src/components/accordion'

export const Single: Story = () => (
  <div style={{ width: 400 }}>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the design system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
)

export const Multiple: Story = () => (
  <div style={{ width: 400 }}>
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can multiple panels be open?</AccordionTrigger>
        <AccordionContent>Yes. Set type="multiple" to allow multiple open panels.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Does it remember state?</AccordionTrigger>
        <AccordionContent>
          Yes. Use defaultValue to set the initial open panel(s).
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can items be disabled?</AccordionTrigger>
        <AccordionContent>Yes. Set the disabled prop on AccordionItem.</AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
)

export const DefaultOpen: Story = () => (
  <div style={{ width: 400 }}>
    <Accordion type="single" collapsible defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>This panel is open by default</AccordionTrigger>
        <AccordionContent>Use defaultValue to control the initial open state.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Another item</AccordionTrigger>
        <AccordionContent>Click to expand.</AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
)
