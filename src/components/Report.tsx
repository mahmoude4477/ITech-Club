import Animations from "./Animation";

const Reports = () => {
  const ReportsList = ["تقرير الاول", "تقرير الثاني", "تقرير الثالث"];

  return (
    <Animations>
      <div id="Reports" className="h-screen flex flex-col justify-center ">
        <h1 className="text-center mb-5 text-5xl md:text-6xl font-bold">
          التقارير
        </h1>
        {/* <ul dir="rtl" className="ps-5 mt-2 space-y-1 list-disc list-inside">
          {Goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul> */}
        <div dir="rtl" className="flex mb-1 space-y-3 flex-col">
          {ReportsList.map((Report, index) => (
            <a className="border w-full p-5   " key={index}>
              {Report}
            </a>
          ))}
        </div>
      </div>
    </Animations>
  );
};

export default Reports;
