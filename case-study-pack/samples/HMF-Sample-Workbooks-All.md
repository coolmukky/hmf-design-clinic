HMF Design Clinic, Completed Workbook
Team: Team A
Members (up to 8): 8 present

========================================
CASE STUDY 1
========================================

Pain point 1
Concern: Under the EU AI Act, we are classified as a 'Provider' for our internal AI systems. We need to demonstrate robustness and cybersecurity compliance to satisfy Article 15. How does Cisco help us meet these specific requirements?
Product / platform: Cisco AI Defense (AI Model and Application Validation)
Solution Engineer response: The real requirement here is provider-level evidence of robustness and cybersecurity under EU AI Act Article 15. Cisco AI Defense is specifically designed to support Provider obligations under the EU AI Act. For Cedarline this means it automates the technical evidence gathering required for "Conformity Assessments." By mapping AI-specific threats to standardized frameworks (like MITRE ATLAS and OWASP), it provides the documentation and continuous monitoring necessary to prove to regulators that your systems are robust and compliant.

Pain point 2
Concern: We are integrating various open-source models and third-party agents into our internal workflows. How can we ensure these assets aren't introducing vulnerabilities into our environment before they even go live?
Product / platform: Cisco AI Defense (Supply Chain Risk Management)
Solution Engineer response: The real requirement here is vetting AI models and third-party agents for vulnerabilities before they reach production. Cisco AI Defense addresses this through proactive Supply Chain Risk Management. For Cedarline this means it enables "Shift-Left" security by creating an inventory of all AI models and agents.

Pain point 3
Concern: We know AI is showing up across our cloud environments faster than security can track it. We're worried we have models, agents, datasets, and MCP-connected tools running without visibility or consistent controls.
Product / platform: Cisco AI Defense (AI Cloud Visibility)
Solution Engineer response: The real requirement here is visibility and consistent control over AI assets (models, agents, datasets and MCP tools) across the cloud. That's exactly the visibility gap Cisco AI Defense is built to solve. For Cedarline this means identifies rogue or unsanctioned AI assets.

Pain point 4
Concern: We're running AI workloads in cloud accounts, but we don't have a reliable way to see which models and AI assets are actually in use. We're also concerned about workloads reaching out to third-party AI models without security knowing about it. And even when we do know the traffic path, we need a practical way to inspect and enforce guardrails on prompt and response traffic in the cloud without changing every application.
Product / platform: Cisco Hypershield (runtime enforcement)
Solution Engineer response: The real requirement here is seeing AI assets and third-party model usage, and enforcing runtime guardrails on AI traffic without changing applications. That's exactly what the Cisco AI Defense-Cisco Multicloud Defense integration is designed to address. For Cedarline this means finds AI assets in cloud accounts.

========================================
CASE STUDY 2
========================================

Pain point 1
Concern: If a breach occurs in one of our public cloud instances, we are terrified that the attacker will move laterally into our core on-premises systems. How can we contain these threats in a multicloud environment?
Product / platform: Cisco Multicloud Defense (macro and micro-segmentation gateways)
Solution Engineer response: The real requirement here is containing lateral movement between public cloud and on-prem in a multicloud environment. Cisco Multicloud Defense leverages macro and micro-segmentation capabilities to enforce strict communication boundaries. For Cedarline this means it provides granular visibility and control over east-west traffic.

Pain point 2
Concern: Our auditors require proof that our security controls are applied consistently across all our cloud workloads. Gathering this data from different cloud providers is a manual, time-consuming nightmare.
Product / platform: Cisco Multicloud Defense (unified logging and visibility)
Solution Engineer response: The real requirement here is consistent, auditable proof that security controls are applied across all cloud workloads. Cisco Multicloud Defense provides unified logging and traceability. For Cedarline this means it automates the collection of evidence for security audits.

Pain point 3
Concern: We have workloads spread across AWS, Azure, and on-premises data centers. Managing security policies individually in each cloud environment is creating massive operational overhead and leading to inconsistent security posture.
Product / platform: Cisco Multicloud Defense (unified policy across public clouds)
Solution Engineer response: The real requirement here is one consistent policy model across AWS, Azure and on-prem, without per-cloud overhead. Cisco Multicloud Defense, integrated within our Hybrid Mesh Firewall architecture, provides a unified control plane. For Cedarline this means it replaces siloed, manual configuration with centralized orchestration.

Pain point 4
Concern: We have workloads on-prem, in cloud, and in mixed environments, and policy consistency is becoming difficult. Every environment feels different, and we're worried about drift.
Product / platform: Cisco Secure Workload with Cisco Secure Firewall (managed via FMC and Security Cloud Control)
Solution Engineer response: The real requirement here is unified segmentation that prevents policy drift across hybrid and multicloud. That's a common hybrid environment challenge. For Cedarline this means reduces policy drift across hybrid and multicloud environments.

========================================
CASE STUDY 3
========================================

Pain point 1
Concern: When our security tools detect a compromised device, our manual response time is too slow. By the time we identify the user and manually isolate the port, the attacker has already moved through the network.
Product / platform: Cisco ISE (Security Group Tags via pxGrid and Adaptive Network Control)
Solution Engineer response: The real requirement here is automated, real-time isolation of a compromised device, faster than a manual response. Cisco ISE integrates with your security ecosystem via pxGrid and Adaptive Network Control (ANC). For Cedarline this means it automates the "Response" phase of the incident lifecycle.

Pain point 2
Concern: Our firewall environment has become too complex to manage manually.
Product / platform: Cisco Security Cloud Control with FMC and Cisco Secure Firewall (unified policy administration)
Solution Engineer response: The real requirement here is simplifying and cleaning up firewall policy administration at scale. Cisco applies AI-driven analysis to firewall telemetry and policy data to surface optimization opportunities, reduce manual troubleshooting, and guide cleaner policy administration. For Cedarline this means reduces manual policy review; identifies redundant/stale rules; lowers risk from human error.

Pain point 3
Concern: Most of our traffic is encrypted, so we've lost visibility into a huge part of our environment.
Product / platform: Cisco Secure Firewall with the Encrypted Visibility Engine (EVE)
Solution Engineer response: The real requirement here is restoring visibility into encrypted traffic without decrypting everything. Encrypted Visibility Engine (EVE) uses AI/ML-based fingerprinting to analyze encrypted traffic patterns and identify suspicious behavior without decrypting the payload. For Cedarline this means restores visibility into encrypted blind spots; avoids the performance/privacy overhead of decrypt-everything strategies.

Pain point 4
Concern: We're worried traditional signature-based detection won't catch new or unknown attacks quickly enough.
Product / platform: Cisco Secure Firewall with Snort ML
Solution Engineer response: The real requirement here is detecting unknown and zero-day threats beyond signature-based detection. That's exactly where Snort ML helps. For Cedarline this means addresses the gap between known and unknown threat detection; reduces dependence on signature timing.

========================================
CASE STUDY 4
========================================

Pain point 1
Concern: Network policy helps, but we also need to know what's happening at runtime inside the workload. We need better detection of suspicious behavior and policy violations.
Product / platform: Cisco Secure Workload
Solution Engineer response: The real requirement here is runtime detection of suspicious behaviour and policy violations inside workloads. That's where Tetragon comes in. For Cedarline this means adds runtime visibility beyond basic network controls.

Pain point 2
Concern: Our Kubernetes networking feels fragmented across clusters and environments. We're dealing with too many moving parts, inconsistent policies, and too much operational complexity.
Product / platform: Isovalent Cilium (eBPF Kubernetes networking and policy)
Solution Engineer response: The real requirement here is consistent Kubernetes networking and policy across clusters, with less operational complexity. That's exactly where Isovalent Cilium helps. For Cedarline this means replaces brittle, IP-centric networking models with a Kubernetes-native approach.

Pain point 3
Concern: Right now we're stitching together separate tools for networking, security, and observability in Kubernetes, and it's creating too much overhead.
Product / platform: Isovalent Cilium with Tetragon
Solution Engineer response: The real requirement here is consolidating Kubernetes networking, security and observability to reduce tool sprawl. That's exactly the consolidation opportunity Isovalent addresses. For Cedarline this means consolidates multiple functions into one platform approach.

Pain point 4
Concern: We know we need microsegmentation, but we don't have enough visibility into east-west flows or application dependencies to create policy safely. We don't want to break the application.
Product / platform: Cisco Secure Workload (application dependency mapping)
Solution Engineer response: The real requirement here is mapping east-west flows and application dependencies to segment safely without breaking applications. That's one of the biggest reasons customers adopt Cisco Secure Workload. For Cedarline this means reveals actual application communication paths.



HMF Design Clinic, Completed Workbook
Team: Team B
Members (up to 8): 8 present

========================================
CASE STUDY 1
========================================

Pain point 1
Concern: Under the EU AI Act, we are classified as a 'Provider' for our internal AI systems. We need to demonstrate robustness and cybersecurity compliance to satisfy Article 15. How does Cisco help us meet these specific requirements?
Product / platform: Cisco AI Defense (AI Model and Application Validation)
Solution Engineer response: The real requirement is provider-level evidence of robustness and cybersecurity under EU AI Act Article 15. We would use Cisco AI Defense with ai model and application validation, which helps by cisco AI Defense is specifically designed to support Provider obligations under the. This improves security for the team.

Pain point 2
Concern: We are integrating various open-source models and third-party agents into our internal workflows. How can we ensure these assets aren't introducing vulnerabilities into our environment before they even go live?
Product / platform: Cisco AI Defense (Supply Chain Risk Management)
Solution Engineer response: The real requirement is vetting AI models and third-party agents for vulnerabilities before they reach production. We would use Cisco AI Defense with supply chain risk management, which helps by cisco AI Defense addresses this through proactive Supply Chain Risk Management. We. This improves security for the team.

Pain point 3
Concern: We know AI is showing up across our cloud environments faster than security can track it. We're worried we have models, agents, datasets, and MCP-connected tools running without visibility or consistent controls.
Product / platform: Cisco AI Defense (AI Cloud Visibility)
Solution Engineer response: The real requirement is visibility and consistent control over AI assets (models, agents, datasets and MCP tools) across the cloud. We would use Cisco AI Defense with ai cloud visibility, which helps by that's exactly the visibility gap Cisco AI Defense is built to solve.. This improves security for the team.

Pain point 4
Concern: We're running AI workloads in cloud accounts, but we don't have a reliable way to see which models and AI assets are actually in use. We're also concerned about workloads reaching out to third-party AI models without security knowing about it. And even when we do know the traffic path, we need a practical way to inspect and enforce guardrails on prompt and response traffic in the cloud without changing every application.
Product / platform: Cisco AI Defense with Cisco Multicloud Defense (AI Runtime Protection)
Solution Engineer response: The real requirement is seeing AI assets and third-party model usage, and enforcing runtime guardrails on AI traffic without changing applications. We would use Cisco AI Defense with Cisco Multicloud Defense with ai runtime protection, which helps by that's exactly what the Cisco AI Defense-Cisco Multicloud Defense integration is designed. This improves security for the team.

========================================
CASE STUDY 2
========================================

Pain point 1
Concern: If a breach occurs in one of our public cloud instances, we are terrified that the attacker will move laterally into our core on-premises systems. How can we contain these threats in a multicloud environment?
Product / platform: Cisco Multicloud Defense (macro and micro-segmentation gateways)
Solution Engineer response: The real requirement is containing lateral movement between public cloud and on-prem in a multicloud environment. We would use Cisco Multicloud Defense with macro and micro-segmentation gateways, which helps by cisco Multicloud Defense leverages macro and micro-segmentation capabilities to enforce strict communication. This improves security for the team.

Pain point 2
Concern: Our auditors require proof that our security controls are applied consistently across all our cloud workloads. Gathering this data from different cloud providers is a manual, time-consuming nightmare.
Product / platform: Cisco Multicloud Defense (unified logging and visibility)
Solution Engineer response: The real requirement is consistent, auditable proof that security controls are applied across all cloud workloads. We would use Cisco Multicloud Defense with unified logging and visibility, which helps by cisco Multicloud Defense provides unified logging and traceability. Because our security framework. This improves security for the team.

Pain point 3
Concern: We have workloads spread across AWS, Azure, and on-premises data centers. Managing security policies individually in each cloud environment is creating massive operational overhead and leading to inconsistent security posture.
Product / platform: Cisco Multicloud Defense (unified policy across public clouds)
Solution Engineer response: The real requirement is one consistent policy model across AWS, Azure and on-prem, without per-cloud overhead. We would use Cisco Multicloud Defense with unified policy across public clouds, which helps by cisco Multicloud Defense, integrated within our Hybrid Mesh Firewall architecture, provides a. This improves security for the team.

Pain point 4
Concern: We have workloads on-prem, in cloud, and in mixed environments, and policy consistency is becoming difficult. Every environment feels different, and we're worried about drift.
Product / platform: Cisco Secure Workload with Cisco Secure Firewall (managed via FMC and Security Cloud Control)
Solution Engineer response: The real requirement is unified segmentation that prevents policy drift across hybrid and multicloud. We would use Cisco Secure Workload with Cisco Secure Firewall with managed via fmc and security cloud control, which helps by that's a common hybrid environment challenge. Cisco Secure Workload helps create a. This improves security for the team.

========================================
CASE STUDY 3
========================================

Pain point 1
Concern: When our security tools detect a compromised device, our manual response time is too slow. By the time we identify the user and manually isolate the port, the attacker has already moved through the network.
Product / platform: Cisco ISE (Security Group Tags via pxGrid and Adaptive Network Control)
Solution Engineer response: The real requirement is automated, real-time isolation of a compromised device, faster than a manual response. We would use Cisco ISE with security group tags via pxgrid and adaptive network control, which helps by cisco ISE integrates with your security ecosystem via pxGrid and Adaptive Network. This improves security for the team.

Pain point 2
Concern: Our firewall environment has become too complex to manage manually.
Product / platform: Cisco Security Cloud Control with FMC and Cisco Secure Firewall (unified policy administration)
Solution Engineer response: The real requirement is simplifying and cleaning up firewall policy administration at scale. We would use Cisco Security Cloud Control with FMC and Cisco Secure Firewall with unified policy administration, which helps by cisco applies AI-driven analysis to firewall telemetry and policy data to surface. This improves security for the team.

Pain point 3
Concern: Most of our traffic is encrypted, so we've lost visibility into a huge part of our environment.
Product / platform: Cisco Secure Firewall with the Encrypted Visibility Engine (EVE)
Solution Engineer response: The real requirement is restoring visibility into encrypted traffic without decrypting everything. We would use Cisco Secure Firewall with the Encrypted Visibility Engine with eve, which helps by encrypted Visibility Engine (EVE) uses AI/ML-based fingerprinting to analyze encrypted traffic patterns. This improves security for the team.

Pain point 4
Concern: We're worried traditional signature-based detection won't catch new or unknown attacks quickly enough.
Product / platform: Cisco Secure Firewall with Snort ML
Solution Engineer response: The real requirement is detecting unknown and zero-day threats beyond signature-based detection. We would use Cisco Secure Firewall with Snort ML, which helps by that's exactly where Snort ML helps. It adds machine-learning-based detection inside the. This improves security for the team.

========================================
CASE STUDY 4
========================================

Pain point 1
Concern: Network policy helps, but we also need to know what's happening at runtime inside the workload. We need better detection of suspicious behavior and policy violations.
Product / platform: Isovalent Tetragon (eBPF runtime security)
Solution Engineer response: The real requirement is runtime detection of suspicious behaviour and policy violations inside workloads. We would use Isovalent Tetragon with ebpf runtime security, which helps by that's where Tetragon comes in. Tetragon extends the value of Cilium by. This improves security for the team.

Pain point 2
Concern: Our Kubernetes networking feels fragmented across clusters and environments. We're dealing with too many moving parts, inconsistent policies, and too much operational complexity.
Product / platform: Isovalent Cilium (eBPF Kubernetes networking and policy)
Solution Engineer response: The real requirement is consistent Kubernetes networking and policy across clusters, with less operational complexity. We would use Isovalent Cilium with ebpf kubernetes networking and policy, which helps by that's exactly where Isovalent Cilium helps. Cilium provides a modern, eBPF-based Kubernetes. This improves security for the team.

Pain point 3
Concern: Right now we're stitching together separate tools for networking, security, and observability in Kubernetes, and it's creating too much overhead.
Product / platform: Isovalent Cilium with Tetragon
Solution Engineer response: The real requirement is consolidating Kubernetes networking, security and observability to reduce tool sprawl. We would use Isovalent Cilium with Tetragon, which helps by that's exactly the consolidation opportunity Isovalent addresses. With Cilium for networking and. This improves security for the team.

Pain point 4
Concern: We know we need microsegmentation, but we don't have enough visibility into east-west flows or application dependencies to create policy safely. We don't want to break the application.
Product / platform: Cisco Secure Workload (application dependency mapping)
Solution Engineer response: The real requirement is mapping east-west flows and application dependencies to segment safely without breaking applications. We would use Cisco Secure Workload with application dependency mapping, which helps by that's one of the biggest reasons customers adopt Cisco Secure Workload. It. This improves security for the team.



HMF Design Clinic, Completed Workbook
Team: Team C
Members (up to 8): 8 present

========================================
CASE STUDY 1
========================================

Pain point 1
Concern: Under the EU AI Act, we are classified as a 'Provider' for our internal AI systems. We need to demonstrate robustness and cybersecurity compliance to satisfy Article 15. How does Cisco help us meet these specific requirements?
Product / platform: Cisco Secure Firewall
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 2
Concern: We are integrating various open-source models and third-party agents into our internal workflows. How can we ensure these assets aren't introducing vulnerabilities into our environment before they even go live?
Product / platform: (left blank)
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 3
Concern: We know AI is showing up across our cloud environments faster than security can track it. We're worried we have models, agents, datasets, and MCP-connected tools running without visibility or consistent controls.
Product / platform: Cisco Secure Firewall
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 4
Concern: We're running AI workloads in cloud accounts, but we don't have a reliable way to see which models and AI assets are actually in use. We're also concerned about workloads reaching out to third-party AI models without security knowing about it. And even when we do know the traffic path, we need a practical way to inspect and enforce guardrails on prompt and response traffic in the cloud without changing every application.
Product / platform: (left blank)
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

========================================
CASE STUDY 2
========================================

Pain point 1
Concern: If a breach occurs in one of our public cloud instances, we are terrified that the attacker will move laterally into our core on-premises systems. How can we contain these threats in a multicloud environment?
Product / platform: Cisco Secure Firewall
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 2
Concern: Our auditors require proof that our security controls are applied consistently across all our cloud workloads. Gathering this data from different cloud providers is a manual, time-consuming nightmare.
Product / platform: (left blank)
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 3
Concern: We have workloads spread across AWS, Azure, and on-premises data centers. Managing security policies individually in each cloud environment is creating massive operational overhead and leading to inconsistent security posture.
Product / platform: Cisco Secure Firewall
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 4
Concern: We have workloads on-prem, in cloud, and in mixed environments, and policy consistency is becoming difficult. Every environment feels different, and we're worried about drift.
Product / platform: (left blank)
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

========================================
CASE STUDY 3
========================================

Pain point 1
Concern: When our security tools detect a compromised device, our manual response time is too slow. By the time we identify the user and manually isolate the port, the attacker has already moved through the network.
Product / platform: Cisco Secure Firewall
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 2
Concern: Our firewall environment has become too complex to manage manually.
Product / platform: (left blank)
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 3
Concern: Most of our traffic is encrypted, so we've lost visibility into a huge part of our environment.
Product / platform: Cisco Secure Firewall
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 4
Concern: We're worried traditional signature-based detection won't catch new or unknown attacks quickly enough.
Product / platform: (left blank)
Solution Engineer response: (left blank)

========================================
CASE STUDY 4
========================================

Pain point 1
Concern: Network policy helps, but we also need to know what's happening at runtime inside the workload. We need better detection of suspicious behavior and policy violations.
Product / platform: Cisco Secure Firewall
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 2
Concern: Our Kubernetes networking feels fragmented across clusters and environments. We're dealing with too many moving parts, inconsistent policies, and too much operational complexity.
Product / platform: (left blank)
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 3
Concern: Right now we're stitching together separate tools for networking, security, and observability in Kubernetes, and it's creating too much overhead.
Product / platform: Cisco Secure Firewall
Solution Engineer response: This will help keep Cedarline secure and solve the problem for the team.

Pain point 4
Concern: We know we need microsegmentation, but we don't have enough visibility into east-west flows or application dependencies to create policy safely. We don't want to break the application.
Product / platform: (left blank)
Solution Engineer response: (left blank)
