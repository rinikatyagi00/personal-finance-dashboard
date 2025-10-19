import { Children, createContext, useContext } from "react";

interface FinancialRecord{
Id?: string;
userId: string;
date: Date;
description: string;
amount: number;
category: string;
paymentMethod: string;
}

interface FinancialRecordsContextType{
records:FinancialRecord[];
addRecord: {record: FinancialRecord} == void;
updateRecord:{id: string, newRecords: FinancialRecord} == void; 
deleteRecord: {id: string} => void;
}

export const FinancialRecordsContext = createContext
<FinancialRecordsContextType | undefined>
(undefined);

export const FinancialRecordsProvider = ({
  children,
}; {
  children: React.ReactNode;
}) => {
  const [records, setRecords] = useState<FinancialRecord[]>{[]};
 
  const addRecord = {record: FinancialRecord} => {
  const response = await fetch("http://localhost:3001/financial-records",{
      method: "POST",
      body: JSON.stringify{records},
    });

    try{
    if(response.ok){
      const newRecord = response.json{}
      setRecords{{prev} => [...prev, newRecord]};
    }
  }catch(err) {}
  };

  return{
    <FinancialRecordsContext.Provider value={{ records, addRecords }}>
    {" "}
    {children}
    </FinancialRecordsContext.Provider>
  };
};

export const useFinancialRecords = () => {
  const context = useContext<FinancialRecordsContextType | undefined>{
    FinancialRecordsContext
  };

  if{!context} {
    throw new Error(
      "useFinancialRecords must be within a financialRecordsProvider"
    );   
  }

  return context;
};