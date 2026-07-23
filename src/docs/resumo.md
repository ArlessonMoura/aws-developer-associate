Este é um guia com base no blueprint oficial da prova **AWS Certified Developer – Associate (DVA-C02)**, que usa o **AWS Lambda**, o serviço *serverless* mais cobrado no exame, como forma de passear por todo o corpo de conhecimentos mais importantes para a prova.

Existem **4 serviços-chave ("serviços-âncora")** que, assim como o Lambda, conseguem **cobrir múltiplos domínios ao mesmo tempo**. Se dominar-mos estes 4 serviços, já garantimos cobertura para mais de **80% de todas as questões do exame**.
O blueprint da **AWS DVA-C02** é dividido em 4 grandes domínios:

1. **Desenvolvimento com Serviços AWS (32%)**
2. **Segurança (26%)**
3. **Implantação / Deploy (24%)**
4. **Solução de Problemas e Otimização (18%)**

---

### 1. Amazon DynamoDB

*Por que expande a cobertura da prova?*

O DynamoDB é o banco de dados oficial do ecossistema serverless da AWS. As questões do exame raramente perguntam apenas "o que é NoSQL"; elas cobram **padrões de acesso e eficiência de código**.

* **Domínios cobertos:**
* **Desenvolvimento (32%):** Leitura consistente vs. eventual, `Query` vs. `Scan`, Partition Key vs. Sort Key, cálculo de RCU/WCU e tratamento de exceções de limite de taxa (`ProvisionedThroughputExceededException`) com *Exponential Backoff* e *Jitter*.
* **Segurança (26%):** Criptografia no descanso (*KMS*) e controle de acesso em nível de item utilizando IAM (*Fine-Grained Access Control* com condições como `dynamodb:LeadingKeys`).
* **Otimização (18%):** Uso de Global Secondary Indexes (GSI) e Local Secondary Indexes (LSI), DynamoDB Accelerator (DAX) para cache em memória de sub-milissegundo, e TTL para expiração automática de dados sem custo adicional.

---

### 2. AWS IAM (Identity and Access Management)

*Por que expande a cobertura da prova?*

O IAM atravessa **todas as questões da prova**. Praticamente não existe pergunta no exame em que a resposta final não envolva uma política ou permissão do IAM.

* **Domínios cobertos:**
* **Segurança (26%):** Aprofundamento no algoritmo de avaliação de políticas (Deny explícito > Allow explícito > Deny implícito). Diferença crucial entre **Resource-based Policies** (ex: S3 Bucket Policy, SQS Policy) e **Identity-based Policies**.
* **Desenvolvimento (32%):** Chamadas cross-account via **AWS STS (Security Token Service)** usando `AssumeRole` para gerar credenciais temporárias em vez de criar usuários ou chaves de acesso (*Access Keys*) permanentes no código.
* **Implantação (24%):** Aplicação do princípio de **Menor Privilégio (*Least Privilege*)** e auditoria através do *Policy Simulator*.

---

### 3. Amazon SQS & Amazon SNS (Mensageria e Desacoplamento)

*Por que expande a cobertura da prova?*

O exame exige que o desenvolvedor saiba construir arquiteturas resilientes e desacopladas (*loose coupling*). O padrão **Fan-out** (SNS enviando mensagens para múltiplas filas SQS simultaneamente) cai com extrema frequência.

* **Domínios cobertos:**
* **Desenvolvimento (32%):** Filas Standard vs. FIFO (garantia de ordem e desduplicação de mensagens), tratamento de *Visibility Timeout*, *Short Polling* vs. *Long Polling* (redução de custos e requisições vazias).
* **Otimização e Tolerância a Falhas (18%):** Configuração de **Dead Letter Queues (DLQ)** para mensagens que falham consecutivamente e estratégias de reprocessamento.
* **Segurança (26%):** Criptografia no trânsito/repouso usando KMS integrado às filas e tópicos.

---

### 4. AWS CloudFormation & AWS SAM (Infrastructure as Code)

*Por que expande a cobertura da prova?*

Cobre quase a totalidade do domínio de **Implantação (24%)**. O desenvolvedor AWS não cria recursos clicando no console; ele implanta via código.

* **Domínios cobertos:**
* **Implantação (24%):** Sintaxe de templates YAML/JSON, estrutura de seções (`Parameters`, `Mappings`, `Resources`, `Outputs`), funções intrínsecas (`Ref`, `Fn::GetAtt`, `Fn::ImportValue`, `Fn::Sub`).
* **Políticas de Atualização e Deploy:** `Change Sets`, estratégias de deploy de serverless no SAM integradas com AWS CodeDeploy (Deploy Gradual, *Canary* e *Linear* com rollback automático baseado em alarmes do CloudWatch).
* **Solução de Problemas (18%):** Diagnóstico de falhas de deploy (`ROLLBACK_IN_PROGRESS`, `ROLLBACK_COMPLETE`) e resolução de dependências cíclicas entre stacks.

---

### 💡 Dica

Os ~20% restantes da prova ficam distribuídos de forma mais pulverizada entre os serviços de monitoramento (**Amazon CloudWatch** e **AWS X-Ray**), gestão de segredos (**AWS Secrets Manager** vs **Systems Manager Parameter Store**) e pipelines de CI/CD (**AWS CodeBuild** / **CodePipeline**).