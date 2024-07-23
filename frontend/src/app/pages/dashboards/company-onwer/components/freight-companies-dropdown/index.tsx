import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegBuilding } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useGetFreightCompaniesByOnwerQuery } from "@/services/api/freight-company";
import { FreightCompanyInterface } from "@/services/redux/slices/freight-company/types";
import { storeCurrentFreightCompany } from "@/services/redux/slices/freight-company";
import FreightCompanyModal from "../freight-company-modal";

export const FreightCompanyDropDown = () => {
  const [freightCompanies, setFreightCompanies] = useState<
    FreightCompanyInterface[]
  >([]);
  const [freightCompany, setFreightCompany] =
    useState<FreightCompanyInterface>();

  const currentUserId = useSelector(
    (state: any) => state.coAuth.value.tokens.id
  );

  const { data, isLoading } = useGetFreightCompaniesByOnwerQuery(currentUserId);

  const dispatch = useDispatch();

  let navStyle =
    "font-semibold dark:text-gray-200 flex gap-2 items-center hover:bg-gray-700 hover:rounded  py-2 px-2 hover:text-white hover:cursor-pointer";

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setFreightCompanies(data);

      if (data.length > 0) {
        setFreightCompany(data[0]);
      }
    }
  }, [data]);

  const handleSelectFreightCompany = (
    freight_company: FreightCompanyInterface
  ) => {
    setFreightCompany(freight_company);
    dispatch(storeCurrentFreightCompany(freight_company));
  };

  return (
    <div className="flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger className={navStyle}>
          <FaRegBuilding />
          <p className="text-left overflow-hidden whitespace-nowrap text-ellipsis">
          {freightCompany ? freightCompany.company_name : "Freight Company"}
          </p>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {isLoading ? (
            <>
              <p>Loading...</p>
            </>
          ) : (
            <>
              <DropdownMenuLabel>My Freight Companies</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {
              
              freightCompanies.length>0? freightCompanies.map((i) => (
                <DropdownMenuItem onClick={() => handleSelectFreightCompany(i)}>
                  <p className="text-sm">{i.company_name}</p>
                </DropdownMenuItem>
              )):<p className="text-sm p-2">
                  No freight companies to show.
              </p>
              
              }
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <div>
        <FreightCompanyModal />
      </div>

      
    </div>
  );
};
