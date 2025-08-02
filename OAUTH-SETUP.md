# Configuração OAuth e Resolução de Problemas

## Erro: redirect_uri_mismatch

Este erro ocorre quando a URI de redirecionamento configurada no provedor OAuth não corresponde à URL que está sendo enviada na requisição.

### Problema Identificado

- **Frontend**: Rodando em HTTPS (https://localhost:4200)
- **Backend**: Configurado para HTTP (http://localhost:5001)
- **OAuth Provider**: Configurado para uma URI diferente

### Soluções

#### 1. Configurar Backend para HTTPS

Certifique-se de que seu backend também está rodando em HTTPS:

```bash
# Para .NET Core
dotnet run --urls "https://localhost:5001"

# Para Node.js/Express
# Configure SSL no seu servidor backend
```

#### 2. Atualizar URIs de Redirecionamento no GitHub OAuth

1. Acesse [GitHub Developer Settings](https://github.com/settings/developers)
2. Selecione sua aplicação OAuth
3. Em "Authorization callback URL", configure:
   ```
   https://localhost:4200/login/callback
   ```

#### 3. Verificar Configuração do Backend

No seu backend, certifique-se de que as URIs de redirecionamento estão configuradas corretamente:

```csharp
// Exemplo para .NET Core
services.AddAuthentication()
    .AddGitHub(options =>
    {
        options.ClientId = "your-client-id";
        options.ClientSecret = "your-client-secret";
        options.CallbackPath = "/login/callback";
    });
```

#### 4. URLs Configuradas no Projeto

**Frontend (Angular):**
- URL Principal: https://localhost:4200
- Callback: https://localhost:4200/login/callback

**Backend:**
- API URL: https://localhost:5001/api
- Auth URL: https://localhost:5001/api/auth

### Configuração Atual do Projeto

O projeto está configurado para usar HTTPS em todas as comunicações:

```typescript
// src/app/config/environment.ts
export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api',
  authUrl: 'https://localhost:5001/api/auth'
};
```

### Checklist para Resolver o Problema

- [ ] Backend rodando em HTTPS (https://localhost:5001)
- [ ] GitHub OAuth configurado com callback URL: https://localhost:4200/login/callback
- [ ] Frontend rodando em HTTPS (https://localhost:4200)
- [ ] Certificados SSL válidos para ambos frontend e backend

### Testando a Configuração

1. Inicie o backend em HTTPS
2. Inicie o frontend: `npm run start:https`
3. Acesse: https://localhost:4200
4. Clique em "Login with GitHub"
5. Verifique se não há mais erro de redirect_uri_mismatch

### Logs Úteis

Para debug, verifique:
- Console do navegador (F12)
- Logs do backend
- Network tab no DevTools para ver as requisições 