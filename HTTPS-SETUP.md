# Configuração HTTPS para SSO-TEST-FRONT

Este projeto foi configurado para rodar em HTTPS durante o desenvolvimento.

## Certificados SSL

Os certificados SSL auto-assinados foram gerados e estão localizados em:
- `ssl/server.key` - Chave privada
- `ssl/server.crt` - Certificado

## Como rodar em HTTPS

### Opção 1: Usando certificados auto-assinados (recomendado para desenvolvimento)
```bash
npm run start:https
```

### Opção 2: Usando certificados customizados
```bash
npm run start:https:custom
```

### Opção 3: Comando direto
```bash
ng serve --ssl
```

## Acessando a aplicação

Após iniciar o servidor em HTTPS, acesse:
- **HTTPS**: https://localhost:4200
- **HTTP**: http://localhost:4200 (ainda disponível)

## Aviso sobre certificados auto-assinados

Como estamos usando certificados auto-assinados para desenvolvimento, seu navegador mostrará um aviso de segurança. Para contornar isso:

### Chrome/Edge:
1. Clique em "Avançado"
2. Clique em "Prosseguir para localhost (não seguro)"

### Firefox:
1. Clique em "Avançado"
2. Clique em "Aceitar o risco e continuar"

### Safari:
1. Clique em "Mostrar detalhes"
2. Clique em "Visitar este site"

## Regenerando certificados

Se precisar regenerar os certificados SSL, execute:
```bash
./generate-ssl.sh
```

## Scripts disponíveis

- `npm start` - Roda em HTTP (padrão)
- `npm run start:https` - Roda em HTTPS com certificados auto-assinados
- `npm run start:https:custom` - Roda em HTTPS com certificados customizados

## Configuração no angular.json

O projeto foi configurado no `angular.json` para usar SSL por padrão:

```json
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "ssl": true,
    "sslKey": "ssl/server.key",
    "sslCert": "ssl/server.crt"
  }
}
```

## Notas importantes

1. Os certificados são válidos por 365 dias
2. Os certificados são auto-assinados e válidos apenas para `localhost`
3. Para produção, use certificados válidos de uma autoridade certificadora
4. O diretório `ssl/` está no `.gitignore` para não commitar certificados 