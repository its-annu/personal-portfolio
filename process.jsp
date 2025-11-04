<%-- 
    Document   : process
    Created on : 31 Oct 2025, 1:38:38 pm
    Author     : ANNU
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Visiting</title>
        <style>
            body{
                background-color: #511530;
            }
            h1{
                font-size: 80px;
                margin-top: 20%;
                margin-bottom: 20%;
                color: white;
                margin-left: 10%;
            }
        </style>
    </head>
    <body>
        <h1>THANK YOU FOR VISITING...✨</h1>
    </body>
</html>
<%@page import="java.sql.*,java.util.*"%>
<%
   String name = request.getParameter("name");
    String email = request.getParameter("email");
    String msg = request.getParameter("message");
    try{
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/visitor","root","123456");
    Statement st = conn.createStatement();
    int i = st.executeUpdate("insert into users(name,email,msg) values('"+name+"', '"+email+"','"+msg+"')");
    out.println("data is successfully inserted!");
    }
    catch(Exception e){
    System.out.print(e);
    e.printStackTrace();
    }
%>