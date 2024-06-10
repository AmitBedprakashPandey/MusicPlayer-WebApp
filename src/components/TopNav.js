export default function TopNav() {
  const navItem = [
    {label:"all"},
    {label : "tranding now"},
     {label:"old song"},
     {label:"new song"},
     {label:"mood & genre",subLabel:['party songs','dance songs']}];
  return (
    <div className="bg-black/90">
      <ul className="flex items-center mx-5 py-3">
        {navItem.map((item,index)=>(
            <li key={index} className="flex flex-col items-center mx-3">
          <div className="relative inline-block group">
            <label className="text-sm text-white/70 hover:text-white group-hover:text-white hover:cursor-pointer font-extralight hover:underline group-hover:underline underline-offset-8 duration-300 capitalize text-nowrap">
              {item.label}
            </label>
            {item.subLabel && 

            <div className="hidden group-hover:block absolute top-7 dark:bg-slate-700  p-3 z-50 rounded-lg w-40 -ml-8">
              <ul>
                {item.subLabel.map((item,index)=>(
                <li className="py-2" key={index}>
                  <label className="text-sm font-light dark:text-white/70 hover:text-white/80 hover:underline underline-offset-8 duration-300 capitalize text-nowrap ">{item}</label>
                </li>               
                ))}
              </ul>
            </div>
            }
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}
