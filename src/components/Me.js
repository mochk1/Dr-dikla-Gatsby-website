import React, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';


export const Me = () => {

const [meopen, setmeopen] = useState(false)


    return (
        <div id='me' dir='rtl' className='mx-auto text-section  container  mb-3 bg-indigo-100'>
<img src="/photo2.jpg" className='w-40 float-left mt-6 mx-4' alt="" />

        <p className=' leading-8 p-6 sm:px-12 py-4  text-right'>
            <p className=' pb-4 text-2xl font-semibold '>מי אני</p>

  <p>         
אני ד"ר דקלה אורן.
</p> 

<p className='mt-1 sm:text-justify'>
 כירופרקטורית ומטפלת בכירה בקרניו סקראל.
המרפאה שלי נמצאת בהרצליה ובה אני מטפלת בכל הגילאים החל מיום הלידה.

אני שמחה וגאה בשותפתי למרפאה, בתי, איילת שטרן שהיא אוסטיאופתית. ביחד אנחנו משלבות כוחות וטכניקות כדי להציע מגוון טיפולים. 

</p>
<button onClick={()=>setmeopen(!meopen)} className={`${meopen?'hidden':''} mt-2 text-sm text-indigo-800`}>המשך קריאה </button>

<div onClick={()=>setmeopen(!meopen)}  className={meopen?'':'hidden'}>

<p className='mt-5 text-justify'>
את לימודי הכירופרקטיקה סיימתי בקליפורניה בשנת 1996. במקביל ללימודי התמחיתי בשיטת קרניו סקראל מבית מדרשו של האוסטיאופת ד"ר ג'ון אפלדג'ר.
</p>
<p className='mt-5 text-justify'>
 לאושרי, זכיתי ללמוד אצלו באופן אישי ורוחו עדיין מלווה אותי במפגש עם הקסם שביכולות הגוף לרפא את עצמו.
תוכניות הריפוי שאני מציעה בקליניקה מבוססות על ראייה הוליסטית של האדם בפן הפיזי, הפיזיולוגי והרגשי-נפשי.
לפני היותי מטפלת לימדתי יוגה והתעמלות נשית ותמיד נמשכתי אל מסתרי עמוד השדרה והגב.
</p>
<p className='mt-5 text-justify'>
בתום הלימודים ניהלתי מרכז בריאותי בלוס אלטוס, קליפורניה. בשנת 2004 שבתי לארץ ומאז אני כאן, מעמיקה את שורשי וחוקרת תהליכי ריפוי טבעיים. 
שיטות הטיפול הייחודיות מושכות את שוחרי הבריאות מכל הגילים. מטופלים מקבלים הסבר מקיף על מקור הבעיות שמהן הם סובלים, ועל אפשרויות הטיפול המגוונות.

<p className='mt-5 text-justify'>
 יחס אישי הוא ערך נעלה בטיפול והרגישות לצרכיו של כל מטופל ומטופלת היא שתורמת להצלחת הטיפול. 
בעזרת טכניקות מדעיות מהמתקדמות ביותר בעולם הריפוי הטבעי, בשילוב עם הבנה עמוקה של תהליכי ריפוי אני יכולה ללוות את המטופלים וליישם את עקרונות ה"נפש בריאה בגוף בריא". 
</p>
<p className='mt-5 text-justify'>
הדרך העדינה של שיווי משקל ואיזון הרמוני תוך פיתוח מודעות והקשבה לגוף ולצרכיו, משפרת את הבריאות הגופנית ואת החוסן הנפשי. 
בודהיזם ומודעות הם נשימת חיים עבורי ואני משתדלת להקנות את התובנות והידע למטופלי שצועדים בדרך המרתקת אל הבריאות.   
אני מזמינה אתכם לצעוד בדרך הבריאה ולגלות את הפוטנציאל לאושר ולשמחה שטמון בכם. 
באופן טבעי, כמובן.
</p>
</p>

<AnchorLink href="#me">
<button onClick={()=>setmeopen(!meopen)} className={`${meopen?'':'hidden'} mt-2 text-sm text-indigo-800`}>סגירה </button>
</AnchorLink>
</div>

        </p>
        
        </div>
    )
}


export default Me;