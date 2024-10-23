import EmployeeCard from "../components/EmployeeCard";
import EmployeeDetails from "../components/EmployeeDetails";
import Form from "../components/Form"
import Get from "../components/useGet"
import { useEffect, useState } from "react";
function Employee() {
  const [open, setOpen] = useState(false);
  const [employeeOpen, setEmployeeOpen] = useState(false);
  const [employeeModalId, setEmployeeModalId] = useState(null);
  const employeeData = Get("http://localhost:8080/employee");
  // {open, setOpen, heading, onSubmit, submitText, fields}
  // Fields syntax
  // {
  //  name:"String" // Must be unique and case semsitive
  //  type:"String" // text, email, password
  //  placeholder:"String"
  //  initialValue 
  // }
  const fields = [
    {
      name:"name",
      type:"text",
      placeholder:"Name",
      initialValue:""
    },
    {
      name:"role",
      type:"text",
      placeholder:"Role",
      initialValue:""
    },
    {
      name:"address",
      type:"text",
      placeholder:"Address",
      initialValue:""
    },
    {
      name:"join_date",
      type:"date",
      placeholder:"Join date",
      initialValue:""
    },
    {
      name:"salary",
      type:"number",
      placeholder:"Salary",
      initialValue:""
    }
   ]
  console.log("employee", employeeData);
  const dummy=[
    {
      'name':"Rashmik",
      "id":1,
      "role":"xyz"
    },
    {
      "name":"Jeevan",
      "id":2,
      "role":"xyz"
    },
    {
      "name":"Jeevan",
      "id":2,
      "role":"xyz"
    }
  ]
  console.log(dummy);
    return (
      <div className="min-h-screen">
        <div className="flex justify-between px-10 border-b border-white">
          <div className="flex flex-col justify-center font-heading text-2xl font-bold my-4">
            <div>
            Employee Details
          </div>
          </div>
        <div className="bg-primary-400 font-normal rounded-lg my-4 px-3 py-2 cursor-pointer" onClick={()=>setOpen(true)}>Add Employee</div>
        </div>
      <div className="grid grid-cols-4 gap-7 mx-10 my-10 cursor-pointer">

        {
          employeeData && employeeData.map((data)=>{
          return <EmployeeCard id={data.emp_id} name={data.name} role={data.role} setEmployeeOpen={setEmployeeOpen} setEmployeeModalId={setEmployeeModalId} />
        })
        }
      </div>
        <Form open={open} setOpen={setOpen} heading={"Add an Employee"} method={"POST"} url={'http://localhost:8080/employee'} submitText={"Submit"} fields={fields}/>
        <EmployeeDetails employeeOpen={employeeOpen} setEmployeeOpen={setEmployeeOpen} employeeModalId={employeeModalId} setEmployeeModalId={setEmployeeModalId} />
      </div>
    )
  }

  export default Employee
