<%@ Page Title="Saisie mensuelle des recettes supplémentaires" Language="C#" MasterPageFile="~/master.Master" AutoEventWireup="true" CodeBehind="webFormSaisieMensuelleDesRecettes.aspx.cs" Inherits="FRETNET_RSUPP.webFormGestionDesEnregistrements" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
		<style type="text/css">
		.titresDesPages {
			text-align:center;
			color:#ff6a00;
		}		
	</style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
	<br />
	<div id="dvForulaireSaisie">		
		<asp:Label ID="LblEtatOuvertureInsertion" runat="server" Text="Etat d'Ouverture :"></asp:Label>
		<br />
		<asp:Label ID="LblCodeGare" runat="server" Text="Code Gare :"></asp:Label>
		<asp:ListBox ID="LstBxCodeGare" runat="server"></asp:ListBox>
		<asp:Label ID="LblTotalTape" runat="server" Text="Total déclaré par la gare : "></asp:Label>
		<asp:TextBox ID="TxtBxTotalTape" runat="server"></asp:TextBox>
		<asp:SqlDataSource ID="SqlDataSrcFormulaireInsertionMensuelle" runat="server" ConnectionString='<%$ ConnectionStrings:FRETNET_DBConnectionString1 %>' SelectCommand="SELECT DISTINCT [CODE_GARE] FROM [GARE_UNIQUE_VIEW]"></asp:SqlDataSource>
	</div>
	
	
</asp:Content>
