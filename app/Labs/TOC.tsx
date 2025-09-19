import Link from "next/link";
/**
 * NOT A PAGE:
 * this is not meant to be rendered on its own, instead 
 * should be rendered as part of another page so 
 * we cannot navigate to this 
 * 
 * layout allows you to combine the main page with other pieces
 *  
 */
export default function TOC() {
 return (
   <ul>
     <li>
       <Link href="/Labs" id="wd-lab1-link">
         Home </Link> </li>
     <li>
       <Link href="/Labs/Lab1" id="wd-lab1-link">
         Lab 1 </Link> </li>
     <li>
       <Link href="/Labs/Lab2" id="wd-lab2-link">
         Lab 2 </Link> </li>
     <li>
       <Link href="/Labs/Lab3" id="wd-lab3-link">
         Lab 3 </Link> </li> 
         <li>
       <Link href="/" id="wd-lab3-link">
         Kambaz </Link> </li> </ul>
         
);} 
