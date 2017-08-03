using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

/// <summary>
/// ClsDB est une classe dédiée pourla créatio de la connexion avec la base de données FRETNET_DB
/// </summary>
namespace FRETNET_RSUPP.App_Code
{
	public class clsDB
	{
		public SqlDataAdapter mDataAdapter = new SqlDataAdapter();
		public DataSet mDataSet = new DataSet();
		public SqlConnection mConn;

		public clsDB()
		{ 
			mConn = new SqlConnection("Data Source=desktop-1qc5qjc;Initial Catalog=FRETNET_DB;Integrated Security=True");

		}
		public void ClearRes()
		{
			mDataAdapter.Dispose();
			mDataAdapter = null;
			mDataSet.Dispose();
			if (mConn.State != ConnectionState.Closed)
			{
				mConn.Close();
			}
		}

		public void SqlDB(String strSQL)
		{
			try
			{
				mDataAdapter = new SqlDataAdapter(new SqlCommand(strSQL, mConn));
				mDataSet = new DataSet();
				mDataAdapter.Fill(mDataSet);
			}
			catch (Exception e)
			{
				throw e;
			}
		}
	}
}