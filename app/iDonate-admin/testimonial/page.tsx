import { TestimonialType } from "@/difinitions/types/components-type/testimonial";
import { testimonialsColumns } from "@/components/table/columns/testimonials-columns";
import { DataTable } from "@/components/table/data-table";
import testimonials from "@/data/testimonials.json"

export default function Testimonial() {
  const typedTestimonial: TestimonialType[] = testimonials;
  const filters = [
    {
      columnKey: "position",
      title: "Position",
      options: Array.from(
        new Set(typedTestimonial.map((testimonial) => testimonial.position))
      ).map((testimonial) => ({
        label: testimonial,
        value: testimonial,
      }))
    },
  ]

    return (
      <section  className="flex flex-col flex-1">
        <DataTable 
          searchColumns="name"
          columns={testimonialsColumns} 
          data={typedTestimonial} 
          dateField=""
          filters={filters}
        />
      </section>
    );
}