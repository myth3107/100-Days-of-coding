

import './App.css'



export default function App(){
  return(
    <div style={{display:'flex', justifyContent:'center'}}>
      <Card style={{}} >
        
      </Card>
     <Card/>
     
      </div>
  )
}
 function Card({children}){
  return(
    <div style={{ background: "linear-gradient( to bottom, white,oklch(65.6% 0.241 354.308) )", borderRadius: 10, color:'white', padding:10, margin:10 , height:800, width:550, display:'flex', flexDirection:'column', alignItems:'center'  , justifyContent:'flex-start' }}>
      <div style={{background:'oklch(64.5% 0.246 16.439)',color:'black', margin:10, width:350, height:350 , borderRadius:"50%", overflow:'hidden', boxShadow: '0px 4px 10px rgba(0,0,0,0.3)', display:'flex', justifyContent:'center', alignItems:'center',

        }}>
        <div style={{width:340, height:340, borderRadius:"50%", overflow:'hidden', }}>
            <img src="https://images.unsplash.com/photo-1772107756927-a3975482b1ef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="" style={{}} />
        </div>
          
</div> <br />  
<div >
  <h1 style={{fontSize:70, fontFamily:'ui-sans-serif'}}>Mythless</h1>
  <p style={{fontSize:35,}}>Frontend Engineer</p>
  <p style={{fontSize:35, fontFamily:'The Girl Next Door'}}></p>
 

  
</div>
      {children}

  

    </div>
  );
}