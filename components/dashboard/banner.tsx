import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function BannerComponent (){
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="flex flex-col gap-4 bg-iDonate-light-gray rounded-lg border-0 shadow-light py-4">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-medium-eng font-normal text-iDonate-navy-secondary">
                        Total Transactions
                      </CardTitle>

                      <CardTitle className="text-medium-eng font-normal text-iDonate-navy-secondary">
                        2024
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div className="text-title-eng text-iDonate-green-primary font-bold">$45,231.89</div>
                      <p className="text-sub-description-eng text-iDonate-gray">
                        +20.1% from last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col gap-4 bg-iDonate-light-gray rounded-lg border-0 shadow-light py-4">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-medium-eng font-normal text-iDonate-navy-secondary">
                        Subscriptions
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </CardHeader>

                    <CardContent>
                      <div className="text-title-eng text-iDonate-green-primary font-bold">+2350</div>
                      <p className="text-sub-description-eng text-iDonate-gray">
                        +180.1% from last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col gap-4 bg-iDonate-light-gray rounded-lg border-0 shadow-light py-4">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-medium-eng font-normal text-iDonate-navy-secondary">Sales</CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </CardHeader>

                    <CardContent>
                      <div className="text-title-eng text-iDonate-green-primary font-bold">+12,234</div>
                      <p className="text-sub-description-eng text-iDonate-gray">
                        +19% from last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col gap-4 bg-iDonate-light-gray rounded-lg border-0 shadow-light py-4">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-medium-eng font-normal text-iDonate-navy-secondary">
                        Active Now
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>

                    <CardContent>
                      <div className="text-title-eng text-iDonate-green-primary font-bold">+573</div>
                      <p className="text-sub-description-eng text-iDonate-gray">
                        +201 since last hour
                      </p>
                    </CardContent>
                  </Card>
            </div>
    )
}