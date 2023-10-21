const data =['all','tranding now','old song','new song','mood & genre'] 
export default function TopNav(){
    
    return(
        <div className="bg-slate-700 p-2 text-white font-bold">
<ul className="flex items-center gap-3 px-5 md:gap-4 h-[24px] md:px-24 overflow-hidden overflow-x-auto overflow-y-hidden hideScrollbar">
    {data.map((item , index)=>{
        return <li className="text-base font-light hover:underline underline-offset-[6px] whitespace-pre capitalize" key={index}>{item}</li>
    })}
</ul>

        </div>
    )
}