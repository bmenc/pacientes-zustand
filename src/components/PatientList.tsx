import { usePatientStore } from "../store"


export default function PatientList() {
  const { patients } = usePatientStore();
  console.log(patients);

  return (
    
  )
}