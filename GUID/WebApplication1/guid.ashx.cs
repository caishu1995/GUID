using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;

namespace WebApplication1
{
    /// <summary>
    /// guid 的摘要说明
    /// </summary>
    public class guid : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string str = "Data Source=192.168.2.180;Initial Catalog=BSCDB_TEST_1114;User Id=sa;Password=12342234;MultipleActiveResultSets=true";
            string GUID = "";
            using ( SqlConnection con = new SqlConnection(str) )
            {
                con.Open();
                using ( SqlCommand com = new SqlCommand("select newid()", con) )
                {
                    GUID = com.ExecuteScalar().ToString();
                }
            }

            context.Response.ContentType = "text/plain";
            context.Response.Write(GUID);
            //context.Response.Write(System.Guid.NewGuid().ToString());
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}