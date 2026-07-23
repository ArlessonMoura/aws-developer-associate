# Manual de Mentoria para Certificação AWS Certified Developer – Associate (DVA-C02)

> **Objetivo:** criar um método altamente previsível para que, mesmo sem experiência profunda em AWS, um candidato seja capaz de **passar na certificação AWS Certified Developer – Associate (DVA-C02)** e, principalmente, **tornar-se um desenvolvedor cloud competente**.

---

# Filosofia da Mentoria

A maioria das pessoas estuda AWS da maneira errada.

Elas decoram serviços.

A prova não cobra isso.

Ela cobra **tomada de decisão**.

O aluno precisa aprender a responder perguntas como um arquiteto e como um desenvolvedor AWS.

A mentalidade ensinada durante toda a mentoria será:

> "Qual serviço resolve esse problema com menos código, menor custo, maior segurança e maior aderência às boas práticas da AWS?"

Toda questão da prova gira em torno disso.

---

# Os 10 Mandamentos do Aluno AWS

1. Não decorar serviços; entender problemas e soluções.
2. Priorizar serviços gerenciados sempre que possível.
3. Praticar laboratórios junto com a teoria.
4. Resolver questões todos os dias.
5. Revisar conteúdos em intervalos regulares.
6. Aprender a justificar por que uma alternativa está errada.
7. Conhecer as integrações entre serviços.
8. Pensar em segurança desde o início do desenho da solução.
9. Adotar a mentalidade de menor esforço operacional (*operational excellence*).
10. Entrar na prova para escolher **a melhor solução da AWS**, não apenas uma solução que funcione.

---

# Método "PENSAR COMO A AWS"

O maior diferencial para a prova é raciocinar como a AWS avalia soluções. Em quase todas as questões, a resposta correta tende a privileged os mesmos princípios:

* **Managed over self-managed:** prefira serviços gerenciados.
* **Serverless over servers:** elimine infraestrutura quando possível.
* **Least privilege:** conceda apenas as permissões necessárias.
* **Event-driven:** desacople componentes por meio de eventos.
* **Automate everything:** automatize provisionamento, deploy e operações.
* **Security by default:** criptografia, autenticação e auditoria desde o início.
* **Observability:** métricas, logs e rastreamento distribuído são parte da solução.
* **Cost optimization:** escolha a alternativa que entrega o resultado com menor custo operacional.
* **Resilience:** projete para falhas, alta disponibilidade e recuperação automática.

# Método 80/20

A prova possui aproximadamente 30 serviços citados.

Mas apenas cerca de 15 aparecem constantemente.

O aluno deve dominar profundamente:

IAM

Lambda

API Gateway

DynamoDB

S3

CloudWatch

CloudFormation

SAM

EventBridge

SQS

SNS

Secrets Manager

Parameter Store

KMS

X-Ray

Conhecer superficialmente:

ECS

EKS

CodeBuild

CodeDeploy

CodePipeline

Elastic Beanstalk

Cognito

AppSync

Step Functions

---

# Estratégia para Resolver Questões

Seguir sempre a mesma sequência:

1. Ler a última frase da questão para entender o objetivo.
2. Identificar palavras-chave (segurança, custo, escalabilidade, baixa latência, etc.).
3. Marcar mentalmente os serviços candidatos.
4. Eliminar alternativas incompatíveis.
5. Escolher a opção com menor esforço operacional e maior aderência às boas práticas da AWS.

Essa disciplina reduz o impacto de enunciados longos e melhora a consistência nas respostas.

---

# Método dos 5 Níveis

Cada serviço é estudado em cinco profundidades.

## Nível 1

Reconhecer.

"O que é DynamoDB?"

---

## Nível 2

Relacionar.

"DynamoDB conversa com Lambda?"

---

## Nível 3

Comparar.

"DynamoDB vs Aurora"

---

## Nível 4

Projetar.

"Quando usar DynamoDB?"

---

## Nível 5

Questão AWS.

"O cliente precisa de..."

Esse é o nível da certificação.

---

# Não estude aleatoriamente tudo sem uma ordem, aconselho os seguintes grupos (a sequência está em grau de facilidade, não pelo método 80/20):

| 1. Fundamentos da Nuvem | 2. Segurança e Acesso | 3. Armazenamento (S3) |
| --- | --- | --- |
| Cloud Computing | IAM | Storage Classes |
| Regiões | Policies | Lifecycle |
| AZ | Roles | Versioning |
| Edge | STS | Encryption |
| Shared Responsibility | Cross Account | Presigned URL |
| Well-Architected | Temporary Credentials | Multipart Upload / Replication |

| 4. Serverless (Lambda) | 5. API Gateway | 6. Banco de Dados (DynamoDB) |
| --- | --- | --- |
| Runtime / Memory / Timeout | REST / HTTP API | Partition Key / Sort Key |
| Concurrency / Provisioned | Authorizers | GSI / LSI |
| Layers / Environment Variables | Throttling / Caching | Transactions / Streams |
| Cold Start | Stages / Deployments | TTL / Auto Scaling / On Demand |

| 7. Mensageria | 8. Eventos (EventBridge) | 9. Observabilidade |
| --- | --- | --- |
| SNS / SQS | Rules | CloudWatch (Metrics, Logs, Alarms) |
| FIFO / DLQ | Patterns | Dashboards |
| Visibility Timeout | Cron | X-Ray |
| Long Polling / Fan-out | Event Bus / Partner Events | CloudTrail |

| 10. Proteção de Dados | 11. Deploy e Infraestrutura |  |
| --- | --- | --- |
| KMS | CloudFormation |  |
| Secrets Manager | SAM |  |
| Parameter Store | CDK (visão geral) |  |
| Encryption / Envelope Encryption | Elastic Beanstalk |  |

---

# Método das Comparações

A AWS ama perguntar diferenças.

Criar tabelas comparativas constantemente.

Exemplo.

| Serviço | Melhor para |
| --- | --- |
| SNS | Pub/Sub |
| SQS | Fila |
| EventBridge | Eventos |
| Step Functions | Workflow |

---

Outro exemplo.

| Serviço | Armazena |
| --- | --- |
| S3 | Arquivos |
| DynamoDB | Dados |
| EFS | Sistema de arquivos |
| EBS | Disco |

---

# Método das Histórias

Todo serviço deve ser associado a uma história.

Exemplo.

Uma imobiliária envia documentos.

↓

Upload

↓

S3

↓

Evento

↓

EventBridge

↓

Lambda

↓

Extração

↓

DynamoDB

↓

Notificação

↓

SNS

↓

E-mail.

O cérebro memoriza histórias melhor que slides.

---

# Método das Pegadinhas

Criem uma lista viva (escrevam à mão, o processo de memorização é diferente de digitar).

Exemplo.

Lambda não mantém estado.

IAM Role não possui senha.

SQS Padrão não garante ordem.

FIFO garante ordem.

SNS não armazena mensagens.

CloudTrail registra API Calls.

CloudWatch registra métricas.

Secrets Manager rota senhas.

Parameter Store não rota.

S3 é regional.

CloudFront é global.

---

# Checklist Mental da Questão

O aluno deve responder internamente:

É autenticação?

É armazenamento?

É evento?

É fila?

É banco?

É observabilidade?

É deploy?

É segurança?

É escalabilidade?

É custo?

---

# Sobre tornar-se um desenvolvedor cloud

O foco principal é passar na certificação, mas entre o modelo de preparação da certificação e o desenvolvimento da capacidade mão na massa existe uma diferença gigante. Entretanto, os poucos pontos que unem esses mundos podem ajudar na preparação do teste. Portanto, se possível, o aluno deve fazer laboratórios não guiados onde conscientemente ele identifique que atingiu os seguintes breakpoints:

* o que é desenvolver aplicações cloud-native
* consumir serviços AWS via SDK
* como implementar autenticação em projetos cloud-native
* como utilizar serviços serverless
* compreender eventos
* trabalhar com filas
* publicar mensagens
* armazenar arquivos
* manipular bancos NoSQL
* implementar observabilidade
* realizar deploy
* utilizar IAM corretamente
* proteger aplicações
* compreender custo
* compreender escalabilidade

**Perceba que eu não citei o nome dos serviços responsáveis por cada prática de desenvolvimento. Em minha posição de fazer laboratórios não guiados, esta é uma crítica a como fazemos de forma robótica práticas que deveriam ter criado um contexto para reforço do conhecimento sobre AWS.**

---

# Laboratórios Essenciais

Os laboratórios devem conectar múltiplos serviços, simulando cenários reais de desenvolvimento.

1. **API Serverless CRUD**
* API Gateway → Lambda → DynamoDB


2. **Upload e Processamento de Arquivos**
* S3 → EventBridge → Lambda → SNS


3. **Fila Assíncrona**
* API Gateway → SQS → Lambda → DynamoDB


4. **Workflow Orquestrado**
* Step Functions → Lambda → SNS


5. **Observabilidade**
* CloudWatch Logs, Metrics, Alarms e X-Ray em uma aplicação serverless


6. **Segurança**
* IAM Roles, KMS, Secrets Manager e Parameter Store em uma API


7. **CI/CD**
* CodePipeline + CodeBuild + CloudFormation/SAM para deploy automatizado



---

Internalizar esses princípios é deixar de "decorar respostas" e passar a reconhecer naturalmente a alternativa que melhor representa as boas práticas da AWS — habilidade que aumenta significativamente as chances de aprovação e prepara para desafios reais de desenvolvimento em nuvem.