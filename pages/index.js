import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>  
    <style>{`
      body {
        font-family: Roboto, sans-serif;
        margin: 0;
        padding: 40px;
        background: #e2e1e0;
      }
      
      `}
    </style>
    <div className='.container'>
      <h2>SQL for data data science</h2>
	  <p>Simple tutorial based on the <i>AdventureWorks OLTP</i> database</p>
	  <p>Slides can be found at <a href="https://norfolkdatasci.github.io/presentations/sql-for-data-science">Norfolk Data Sci</a></p>
    </div>
  </div>
)