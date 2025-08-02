#!/bin/bash

# Script para gerar certificados SSL auto-assinados para desenvolvimento

echo "Gerando certificados SSL auto-assinados..."

# Criar diretório ssl se não existir
mkdir -p ssl

# Gerar certificado auto-assinado
openssl req -x509 -newkey rsa:2048 -keyout ssl/server.key -out ssl/server.crt -days 365 -nodes -subj "/C=BR/ST=SP/L=Sao Paulo/O=SSO-TEST/CN=localhost"

echo "Certificados SSL gerados com sucesso!"
echo "Arquivos criados:"
echo "  - ssl/server.key (chave privada)"
echo "  - ssl/server.crt (certificado)"
echo ""
echo "Para rodar o projeto em HTTPS, use:"
echo "  npm run start:https"
echo "ou"
echo "  npm run start:https:custom" 