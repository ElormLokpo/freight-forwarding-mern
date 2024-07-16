import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import ActionDropDown from "@/app/pages/dashboards/company-onwer/warehouses/components/action-dropdown";
const TableComponent = () => {
  return (
    <div className="dark:bg-stone-900">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Warehouse Name</TableHead>
            <TableHead>Warehouse Location</TableHead>
            <TableHead>Freight Company Name</TableHead>
            <TableHead>Manager Id</TableHead>
            <TableHead>Warehouse Vacant</TableHead>
            <TableHead>Date Added</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          ].map((i) => (
            <TableRow className="">
              <TableCell>Adringanor Station Warehouse</TableCell>
              <TableCell>Adringanor, East Stree</TableCell>
              <TableCell>StarLink Freight Company</TableCell>
              <TableCell>bsd223-sfsdf23-sfdfds232-sdfsd </TableCell>
              <TableCell>true</TableCell>
              <TableCell>15th, July 2024</TableCell>
              <TableCell>
                 <ActionDropDown />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
