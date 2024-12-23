# alura-backend

link do deploy no Google Cloud: https://alura-backend-267114827872.southamerica-east1.run.app/api

## Step-by-step para testar aplicação:  
1. Utilizar Postman ou Insomnia para testar métodos GET/POST/DELETE/PUT
2. Para inserir conteúdo: utilizar método POST na url "https://alura-backend-267114827872.southamerica-east1.run.app/api" e inserir conteúdo no body conforme JSON de exemplo abaixo:  
{  
&nbsp;&nbsp;&nbsp;"description": "teste de descrição",  
&nbsp;&nbsp;&nbsp;"imgUrl": "https://placecats.com/300/400",  
&nbsp;&nbsp;&nbsp;"alt": "teste texto alternativo"  
}  
3. Para fazer upload de uma imagem: utilizar método POST na url "https://alura-backend-267114827872.southamerica-east1.run.app/upload" e inserir conteúdo no body com tipo form-data. Segue imagem de exemplo abaixo:  
![upload](https://github.com/user-attachments/assets/9074b211-06b6-4f86-ba5e-9a2c4f9126d6)
Copiar o ID do response para poder editar a descrição, a url da imagem e o texto alternativo.  
4. Para editar o conteúdo da imagem que acabou de ser realizado o upload, utilizar o método PUT no seguinte endpoint:<br>https://alura-backend-267114827872.southamerica-east1.run.app/upload/<"id gerado com o upload da imagem">.<br>No body inserir o seguinte JSON:  
{  
&nbsp;&nbsp;&nbsp;"alt": "url da img alterada"  
}   
O valor do campo "description" será inserido automaticamente segundo prompt de retorno realizado pelo Google Gemini. O valor do campo "imgUrl" será atualizado para a url do projeto.    
5. Para deletar um objeto/conteúdo, utilizar o método DELETE no seguinte endpoint:<br>https://alura-backend-267114827872.southamerica-east1.run.app/api/<"inserir ID no objeto a ser deletado">

