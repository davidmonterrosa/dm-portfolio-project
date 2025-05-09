// 'use client'

// import React from 'react'

// type Props = {
//   isOpen: boolean
//   toggle: () => void
// }

// const MenuIcon: React.FC<Props> = ({ isOpen, toggle }) => {
//   return (
//     <button
//       onClick={toggle}
//       className="relative w-[60px] h-[45px] cursor-pointer transition-transform duration-500"
//       aria-label="Toggle menu"
//     >
//       {/* Line 1 */}
//       <span
//         className={`
//           absolute left-0 h-[9px] w-full dark:bg-black bg-white rounded-full transition-all duration-300 origin-left
//           ${isOpen
//             ? "rotate-45 top-[-3px] left-[8px]"
//             : "rotate-0 top-0 left-0"
//           }`
//         }
//       />

//       {/* Line 2 */}
//       <span
//         className={`absolute left-0 h-[9px] w-full dark:bg-black bg-white rounded-full transition-all duration-300 origin-left
//           ${isOpen
//             ? "opacity-0 w-0 top-[18px]"
//             : "opacity-100 w-full top-[18px]"}`
//         }
//       />

//       {/* Line 3 */}
//       <span
//         className={`absolute left-0 h-[9px] w-full dark:bg-black bg-white rounded-full transition-all duration-300 origin-left
//           ${isOpen
//             ? "rotate-[-45deg] top-[39px] left-[8px]"
//             : "rotate-0 top-[36px] left-0"}`
//         }
//       />
//     </button>
//   )
// }

// export default MenuIcon
