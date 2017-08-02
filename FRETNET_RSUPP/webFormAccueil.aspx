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
        Mois<asp:ListBox ID="ListBox1" runat="server" Height="73px" OnSelectedIndexChanged="ListBox1_SelectedIndexChanged" Width="122px">
            <asp:ListItem>02</asp:ListItem>
            <asp:ListItem>01</asp:ListItem>
            <asp:ListItem>04</asp:ListItem>
            <asp:ListItem>03</asp:ListItem>
            <asp:ListItem>06</asp:ListItem>
            <asp:ListItem>05</asp:ListItem>
            <asp:ListItem>08</asp:ListItem>
            <asp:ListItem>07</asp:ListItem>
            <asp:ListItem>10</asp:ListItem>
            <asp:ListItem>09</asp:ListItem>
            <asp:ListItem>12</asp:ListItem>
            <asp:ListItem>11</asp:ListItem>
        </asp:ListBox>
    </p>
    <p>
        Année<asp:ListBox ID="ListBox2" runat="server" Height="22px" OnSelectedIndexChanged="ListBox1_SelectedIndexChanged" Width="119px">
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
    </p>
    <p>
    </p>
    <p>
    </p>
    <p>
    </p>
		
			
</asp:Content>
