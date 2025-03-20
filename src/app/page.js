import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import Feed from "@/components/feed/Feed";
import fetchData from "@/utils/fetchData";
import Searchbar from "@/components/searchbar/Searchbar";

export default function Home() {
  const handleFetch = () => {
    fetchData('Elon Musk')
  }
  return (
    <div className="flex">
         <Sidebar/>
         <Feed/>
         <Searchbar/>

      
    </div>
  )
}
