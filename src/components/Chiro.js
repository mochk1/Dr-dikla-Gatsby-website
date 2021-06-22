import React, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';


export const Chiro = () => {


    const [chiroopen, setchiroopen] = useState(false)


    return (
        <div id='chiro' dir='rtl' className='mx-auto text-section  container   mb-3 bg-indigo-100'>
          

          
<img src="/photo1.jpg" className='w-40 float-right mt-6 mx-4' alt="" />

            <p className=" leading-8 p-6 sm:px-12  text-right">

            <p className=' pb-5 text-2xl font-semibold '>כירופרקטיקה </p>

<p className='text-justify'>
כירופרקטיקה היא מדע שמטרתו השבת הבריאות על ידי איזון מערכת העצבים.
מערכת העצבים המרכזית כוללת את המוח וחוט השדרה. 
<p className='mt-1 mb-2 text-justify'>
    
ביתה של מערכת העצבים המרכזית הוא הגולגולת ועמוד השדרה.
מתוך פתחים קטנים בין החוליות ובגולגולת יוצאים העצבים הפריפריאלים, אלה שמגיעים לכל מקום בגופנו ואשר משמשים כמערכת של העברת מסרים וביקורת.
תקינות של פעילות מערכת העצבים הכרחית כדי לאפשר איזון בין איברי הגוף השונים ומערכותיו.

</p> 

<p className='flex justify-start ml-20 pl-1'>
<button onClick={()=>setchiroopen(!chiroopen)} className={`${chiroopen?'hidden':''} mt-1 text-sm text-indigo-800`}>המשך קריאה </button>
</p>

</p>



<div onClick={()=>setchiroopen(!chiroopen)} className={chiroopen?'':'hidden'}>


<p className='mb-5'>

<span className='font-semibold'>כירו- ביוונית משמעו יד </span>
<br/>
<span className='font-semibold'> פרקטיקה- לעסוק
   </span>
<br/>
</p>

<p className='mt-2 text-justify'>
כירופרקטורים הם המטפלים שמומחים באיזון מערכת העצבים ומערכות השלד והשרירים.
בהכשרתם, רופאי הכירופרקטיקה, לומדים כשבע שנות לימוד אקדמאיות והם רוכשים השכלה של רופא כללי.
הכירופרקטורים אינם מתמחים במתן תרופות וניתוחים אלא בטכניקות איזון טבעיות שונות של הגוף.
הכירופרקטור.ית שלך תוכל לאבחן את מצבך ולהחליט אם הבעיה ניתנת לפתרון בטיפול כירופרקטי או שיש צורך בהפניה למומחה נוסף כמו אורטופד או נוירולוג.
</p>


<p className='mt-4 text-justify'>
<p className='font-semibold mb-4 text-justify'>שיטת האקטיבטור </p>

שיטת האקטיבטור פותחה על ידי ד"ר ארלן פור כדי לשפר את בטיחות האיזון הכירופרקטי ואת נוחותו. שיטה זו היא אחת השיטות מדעיות הנחקרות ביותר בתחום הכירופרקטיקה. האיבחון והשימוש במכשיר האקטיב טור משפר את תפקוד מעוד השדרה ומפרקי הגוף ותורם רבות להפגת כאבים, מניעת כאבי ראש וצוואר, כאבים לאחר תאונות ועוד...

</p>


<p className='mt-2 text-justify'>

שחיקת הזמן או פגיעות ישנות וחדשות עלולות לגרום לחוליות או למפרקים לאבד את איזונם, לפגוע בסחוסים ולגרות את העצבים והרקמות הרכות. התוצאה היא כאב ותפקוד לקוי של הגוף. ללא טיפול נוטות בעיות אלה להחריף ולגרום להתנוונות המפרקים.(בדומה לעששת בשינים). עזרו לגוף, באופן טבעי!


</p>




<p className='mt-2 text-justify'>

השימוש באקטיבטור לאיזון החוליות והמפרקים הוא: <br />
<strong>עדין, מדויק, מבוקר, בטוח,ואפקטיבי!</strong>

</p>

<p className='mt-2 text-justify'>

הכוונון של המפרקים והחוליות מאד עדין וכמעט בלתי מורגש ולכן הוא מתאים לתינוקות, מבוגרים, נשים בהיריון, נשים שסובלות מבריחת סידן וגם לספורטאים. האיזון מהיר ומשפיע רק על המפרקים הבעייתיים בזמן ששאר הגוף נשאר רגוע.

</p>

<p className='mt-2 italic text-indigo-700 text-justify'>
"נאמר לי על ידי אורטופד שעלי לעבור ניתוח בצווארי. סבלתי מניוון בחוליות הצוואר וגדילה של זיזים שלחצו על העצבים וגרמו לתחושת כאב ונימול בזרועות ובידיים. התקשיתי אפילו להרים את זרועותיי כדי לעבוד מול המחשב

</p>

<p className='mt-2 italic text-indigo-700 text-justify'>

את ד"ר דקלה מצאתי לפני שנתיים ומאז לא חשתי את תחושת הנימול. פחדתי עד מוות שאצטרך לעבור ניתוח בצוואר. אני אוהבת את האיזון הקל בעזרת האקטיבטור. לפני כן הייתי אצל מטפלים אחרים שגרמו לכאבים להתגבר.
האקטיבטור כל כך עדין ואפקטיבי! הכאבים פחתו ואני יכולה להמשיך בעבודתי ללא הגבלה." 


</p>
<p className='mt-1 text-sm'>
שירלי הדוק, סאן חוזה, קליפורניה.
</p>



<AnchorLink href="#chiro">
<button onClick={()=>setchiroopen(!chiroopen)} className={`${chiroopen?'':'hidden'} mt-2 text-sm text-indigo-800`}>סגירה </button>
</AnchorLink>
</div>

        </p>
        
        </div>
    )
}



export default Chiro;