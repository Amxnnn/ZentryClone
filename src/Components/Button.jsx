/* eslint-disable react/prop-types */
//to avoid writing props.title everytime , instead of writing props we write {title,etctetc}
const Button = ({title,id,rightIcon,leftIcon,containerClass}) => {
  return (
    <button id={id} className={` ${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black `} >
    {leftIcon}
    <span className="relative incline-flex text-xs overflow-hidden font-general uppercase" >
        <div>
            {title}
        </div>
    </span>
    {rightIcon}
    </button>
  )
}

export default Button
