export default function Home() {
  return (
    <div style={{background:'#000', color:'#fff', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', padding:'20px', fontFamily:'Arial'}}>
      <img src="/logo.png" alt="logo" style={{width:'140px', marginBottom:'30px'}} />
      <h1 style={{fontSize:'52px', margin:'0 0 20px'}}>Decent Peowr DAO</h1>
      <p style={{fontSize:'28px', color:'#00ffff', maxWidth:'800px'}}>
        Decentralized People’s Power – finally decent.
      </p>
      <div style={{margin:'40px 0', fontSize:'20px'}}>
        <p>Treasury dashboard → coming soon</p>
        <p>$DECENT governance token → coming soon</p>
        <p>First grid acquisition → coming soon</p>
      </div>
      <p style={{marginTop:'60px', fontSize:'18px', color:'#888'}}>
        decentpeowr.org
      </p>
    </div>
  )
}
