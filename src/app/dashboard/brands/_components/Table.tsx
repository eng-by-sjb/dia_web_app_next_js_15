import { Button } from "@/components/ui/button";
import { campaignTableTitles, brandsData } from "@/data/data";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

export default function Table() {
  return (
    <section>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100 bg-opacity-60 border-b">
            {campaignTableTitles.map(({ id, title }) => {
              return (
                <th
                  key={id}
                  className={`text-left text-primary font-normal py-4 px-6 ${
                    title !== "Industry"
                  } ? "w-[20.96rem]" : "w-[11.625rem]"`}>
                  <span>{title}</span>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {brandsData.map(({ id, brandName, industry, numberOfCampaigns, totalAmountSpent }) => {
            return (
              <tr key={id} className={`font-normal`}>
                <td className="text-left  py-7 px-6 border-b">
                  <Link
                    className="h-full w-full"
                    href={`/dashboard/brands/${id}/brand-profile`}
                    passHref>
                    {brandName}
                  </Link>
                </td>
                <td className="text-left  py-7 px-6 border-b">
                  <Link href={`/dashboard/brands/${id}/brand-profile`} passHref>
                    {industry}
                  </Link>
                </td>
                <td className="text-left  py-7 px-6 border-b">
                  <Link href={`/dashboard/brands/${id}/brand-profile`} passHref>
                    {numberOfCampaigns !== null ? `${numberOfCampaigns}` : "-"}
                  </Link>
                </td>
                <td className="text-left  py-7 px-6 border-b">
                  <Link href={`/dashboard/brands/${id}/brand-profile`} passHref>
                    {totalAmountSpent !== null ? `${formatter.format(totalAmountSpent)}` : "-"}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="text-sm font-normal py-4 px-6 flex justify-between">
        <Button variant="outline" className="font-normal flex gap-3">
          <IoIosArrowBack />
          Prev
        </Button>
        <div>
          <Button variant="ghost" className="font-normal">
            1
          </Button>
          <Button variant="ghost" className="font-normal">
            2
          </Button>
          <Button variant="ghost" className="font-normal">
            3
          </Button>
          <Button variant="ghost" className="font-normal">
            4
          </Button>
        </div>
        <Button variant="outline" className="font-normal flex gap-3">
          Next
          <IoIosArrowForward />
        </Button>
      </div>
    </section>
  );
}
