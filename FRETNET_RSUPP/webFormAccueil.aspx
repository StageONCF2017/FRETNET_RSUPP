<%@ Page Title="Page d'Accueil" Language="C#" MasterPageFile="~/master.Master" AutoEventWireup="true" CodeBehind="webFormAccueil.aspx.cs" Inherits="FRETNET_RSUPP.accueil" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
		<style type="text/css">
				
			#divFrmOuverture {
				width: 222px;
				text-align:center;
				color:#ff6a00;
				position:absolute;
				margin:15px;
				margin-left:200px;
				border-color:#ff6a00;
				border-width:medium;
			}
	</style>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
		
			
    <p>
        <br />
    </p>
    <p>
		<asp:Label ID="LblMois" runat="server" Text="Mois">Mois</asp:Label>  
		&nbsp;:<asp:ListBox ID="LstBxMois" runat="server" Height="21px"  Width="122px" style="margin-left: 114px; margin-top: 49px">
            <asp:ListItem>01</asp:ListItem>
            <asp:ListItem>02</asp:ListItem>
            <asp:ListItem>03</asp:ListItem>
            <asp:ListItem>04</asp:ListItem>
            <asp:ListItem>05</asp:ListItem>
            <asp:ListItem>06</asp:ListItem>
            <asp:ListItem>07</asp:ListItem>
            <asp:ListItem>08</asp:ListItem>
            <asp:ListItem>09</asp:ListItem>
            <asp:ListItem>10</asp:ListItem>
            <asp:ListItem>11</asp:ListItem>
            <asp:ListItem>12</asp:ListItem>
        </asp:ListBox>
    </p>
    <p>
		<asp:Label ID="LblAnnee" runat="server" Text="Annee">Année :</asp:Label> 
        <asp:ListBox ID="LstBxAnnee" runat="server" Height="22px"  Width="119px" style="margin-left: 105px">
            <asp:ListItem>2000</asp:ListItem>
            <asp:ListItem>2001</asp:ListItem>
            <asp:ListItem>2002</asp:ListItem>
            <asp:ListItem>2003</asp:ListItem>
            <asp:ListItem>2004</asp:ListItem>
            <asp:ListItem>2005</asp:ListItem>
            <asp:ListItem>2006</asp:ListItem>
            <asp:ListItem>2007</asp:ListItem>
            <asp:ListItem>2008</asp:ListItem>
            <asp:ListItem>2009</asp:ListItem>
            <asp:ListItem>2010</asp:ListItem>
            <asp:ListItem>2011</asp:ListItem>
			<asp:ListItem>2012</asp:ListItem>
            <asp:ListItem>2013</asp:ListItem>
            <asp:ListItem>2014</asp:ListItem>
            <asp:ListItem>2015</asp:ListItem>
            <asp:ListItem>2016</asp:ListItem>
            <asp:ListItem>2017</asp:ListItem>
            <asp:ListItem>2018</asp:ListItem>
            <asp:ListItem>2019</asp:ListItem>
            <asp:ListItem>2020</asp:ListItem>
            <asp:ListItem>2021</asp:ListItem>
            <asp:ListItem>2022</asp:ListItem>
            <asp:ListItem>2023</asp:ListItem>
			<asp:ListItem>2024</asp:ListItem>
            <asp:ListItem>2025</asp:ListItem>
			<asp:ListItem>2026</asp:ListItem>
            <asp:ListItem>2027</asp:ListItem>
            <asp:ListItem>2028</asp:ListItem>
            <asp:ListItem>2029</asp:ListItem>
            <asp:ListItem>2030</asp:ListItem>
            <asp:ListItem>2031</asp:ListItem>
            <asp:ListItem>2032</asp:ListItem>
            <asp:ListItem>2033</asp:ListItem>
            <asp:ListItem>2034</asp:ListItem>
            <asp:ListItem>2035</asp:ListItem>
            <asp:ListItem>2036</asp:ListItem>
            <asp:ListItem>2037</asp:ListItem>
        </asp:ListBox>
    </p>
    <p>
		<asp:Button ID="BtnMoisAnneeOuverture" runat="server" Text="Ouvrir le mois et l'année" style="margin-left: 141px" OnClick="BtnMoisAnneeOuverture_Click" />
    </p>
   
	<br />
	<asp:Label ID="LblEtatOuverture" runat="server" Text=" L'état d'ouverture :"></asp:Label>
			
</asp:Content>
