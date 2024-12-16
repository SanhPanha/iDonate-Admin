import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker";
import { BannerComponent } from "@/components/dashboard/banner";
import { BarAndLineChart } from "@/components/dashboard/bar-and-line-chart";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  

  return (
    <section  className="flex flex-col flex-1">
      <div className="h-full w-full flex-grow flex flex-col space-y-4">

        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-heading-two-eng font-bold tracking-tight text-iDonate-navy-primary">Dashboard</h2>

          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button className="bg-iDonate-navy-secondary hover:bg-iDonate-navy-primary">Download</Button>
          </div>

        </div>

        <BannerComponent/>

        <BarAndLineChart/>

      </div>
    
    </section>
  );
}
