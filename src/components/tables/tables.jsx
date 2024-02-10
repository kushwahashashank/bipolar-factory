import React from "react";
import "./tables.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";

const Tables = () => {
  const tabledata = [
    {
      id: "1",
      name: "Peter John",
      email: "peter@gmail.com",
      role: "Owner",
      locations: "Adam Stall",
      city: "Coimbatore",
      lastactive: "Sep 13, 2023 5:51 PM",
      permissions: "All Permissions",
      status: "Active",
    },
    {
      id: "2",
      name: "Lingam",
      email: "lin@gmail.com",
      role: "Executive",
      locations: "MMDA",
      city: "Coimbatore",
      lastactive: "Today, 2023 2:11 PM",
      permissions: "3 Permissions",
      status: "Active",
    },
    {
      id: "3",
      name: "Adam",
      email: "adam@gmail.com",
      role: "Admin",
      locations: "DEO Office",
      city: "Delhi",
      lastactive: "Sep 13, 2023 5:51 PM",
      permissions: "6 Permissions",
      status: "Active",
    },
    {
      id: "4",
      name: "Smith",
      email: "smith@gmail.com",
      role: "Supervisor",
      locations: "Plot Hub",
      city: "Coimbatore",
      lastactive: "Sep 13, 2023 5:51 PM",
      permissions: "5 Permissions",
      status: "Active",
    },
    {
      id: "5",
      name: "John",
      email: "john@gmail.com",
      role: "Executive",
      locations: "CA",
      city: "Coimbatore",
      lastactive: "Sep 13, 2023 5:51 PM",
      permissions: "2 Permissions",
      status: "Inactive",
    },
  ];
  return (
    <>
      <div className="table">
        <div className="table-conatiner">
          <div className="table-header">
            <div className="table-headings">Name</div>
            <div className="table-headings">Email</div>
            <div className="table-headings">Role</div>
            <div className="table-headings">Locations</div>
            <div className="table-headings">Last Active</div>
            <div className="table-headings">Permissions</div>
            <div className="table-headings">Status</div>
            <div className="table-headings">Action</div>
          </div>
          <div className="table-content">
            {tabledata.map((e) => (
              <div key={e.id} className="table-row">
                <div className="table-row-value">{e.name}</div>
                <div className="table-row-value">{e.email}</div>
                <div className="table-row-value">{e.role}</div>
                <div
                  className="table-row-value"
                  style={{ flexDirection: "column" }}
                >
                  <div className="area">{e.locations}</div>
                  <div className="city">{e.city}</div>
                </div>
                <div className="table-row-value">{e.lastactive}</div>
                <div className="table-row-value">{e.permissions}</div>
                {e.status == "Active" ? (
                  <>
                    <div className="table-row-value">
                      <div
                        style={{ backgroundColor: "#4CAF50" }}
                        className="btn"
                      >
                        {e.status}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="table-row-value">
                      <div
                        style={{ backgroundColor: " #ED1C24" }}
                        className="btn"
                      >
                        {e.status}
                      </div>
                    </div>
                  </>
                )}

                <div className="table-row-value">
                  <div className="edit">
                    <TbEdit />
                  </div>
                  <div className="delete">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tables;
