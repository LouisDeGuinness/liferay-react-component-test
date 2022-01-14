<%@ include file="./init.jsp" %>

<%
Map<String, Object> data = new HashMap<>();

String apiKey = (String)request.getAttribute("APIKey");

data.put("apiKey", apiKey);
%>
Working:
<div class="react-component-working">
	<react:component
		data="<%= data %>"
		module="js/CustomButton.es"
	/>
</div>
Failing:
<div class="react-component-failing">
    <react:component
        data="<%= data %>"
        module="js/CustomButtonFail.es"
    />
</div>