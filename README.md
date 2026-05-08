<div align="right">
  <a href="#chinese">中文</a> | <strong>English</strong>
</div>

---

# COPD Risk Prediction Tool

A web-based tool for predicting Chronic Obstructive Pulmonary Disease (COPD) risk using machine learning.

**Live Demo:** https://pkufh-gp.github.io/

---

## Overview

This tool provides an easy-to-use interface for assessing COPD risk based on clinical indicators. It uses an XGBoost model trained on clinical data to predict the probability of COPD and provides SHAP-based explanations for individual predictions.

## Features

- **Risk Assessment**: Predicts COPD probability based on 7 clinical indicators
- **Classification**: Categorizes risk levels using optimized thresholds
- **Explainable AI**: Visualizes key factors contributing to each prediction using SHAP values
- **Privacy-First**: All predictions run locally in your browser; no data is sent to any server

## Input Parameters

| Parameter | Description | Options |
|-----------|-------------|---------|
| Sex | Biological sex | Male / Female |
| Age | Age in years | 40-90 |
| Smoking Status | Current smoking situation | Current / Former / Never |
| Cough | Presence of chronic cough | Yes / No |
| Phlegm | Presence of chronic phlegm production | Yes / No |
| Respiratory Problems | History of respiratory issues | Yes / No |
| PEF | Peak Expiratory Flow (L/min) | 50-800 |

## Model Performance

The XGBoost model was trained and validated using 5-fold cross-validation:

| Metric | Training | Validation | Test |
|--------|----------|------------|------|
| AUC-ROC | 0.92 | 0.88 | 0.87 |
| Accuracy | 0.85 | 0.82 | 0.81 |
| Sensitivity | 0.84 | 0.80 | 0.79 |
| Specificity | 0.86 | 0.84 | 0.83 |

## How to Use

1. Visit the live demo link above
2. Enter the required clinical information in the form
3. Click "Predict" to see the results
4. Review the risk probability, classification, and SHAP explanation chart

## Disclaimer

**This tool is for research and educational purposes only.** It is not intended to replace professional medical diagnosis. Always consult a qualified healthcare provider for medical advice, diagnosis, or treatment.

---

<div align="right">
  <a name="chinese"></a>
  <a href="#">English</a> | <strong>中文</strong>
</div>

---

# 慢阻肺（COPD）风险预测工具

基于机器学习的慢性阻塞性肺疾病风险在线预测工具。

**在线演示：** https://pkufh-gp.github.io/

---

## 概述

本工具提供简洁的界面，用于基于临床指标评估慢阻肺风险。它使用在临床数据上训练的 XGBoost 模型预测慢阻肺概率，并为每次预测提供基于 SHAP 的可解释分析。

## 功能特点

- **风险评估**：基于 7 项临床指标预测慢阻肺概率
- **风险分级**：使用优化阈值对风险等级进行分类
- **可解释 AI**：使用 SHAP 值可视化每次预测的关键影响因素
- **隐私保护**：所有预测均在浏览器本地运行，数据不会发送到任何服务器

## 输入参数

| 参数 | 说明 | 选项 |
|-----------|-------------|---------|
| 性别 | 生理性别 | 男 / 女 |
| 年龄 | 年龄（岁） | 40-90 |
| 吸烟状况 | 目前吸烟情况 | 当前吸烟 / 曾经吸烟 / 从不吸烟 |
| 咳嗽 | 是否有慢性咳嗽 | 是 / 否 |
| 咳痰 | 是否有慢性咳痰 | 是 / 否 |
| 呼吸问题 | 是否有呼吸系统疾病史 | 是 / 否 |
| 呼气峰值流量 | PEF（升/分钟） | 50-800 |

## 模型性能

XGBoost 模型使用 5 折交叉验证进行训练和验证：

| 指标 | 训练集 | 验证集 | 测试集 |
|--------|----------|------------|------|
| AUC-ROC | 0.92 | 0.88 | 0.87 |
| 准确率 | 0.85 | 0.82 | 0.81 |
| 敏感度 | 0.84 | 0.80 | 0.79 |
| 特异度 | 0.86 | 0.84 | 0.83 |

## 使用方法

1. 访问上方在线演示链接
2. 在表单中输入所需的临床信息
3. 点击"预测"查看结果
4. 查看风险概率、分类结果和 SHAP 解释图表

## 免责声明

**本工具仅供研究和教育使用。** 它不能替代专业的医疗诊断。如有医疗建议、诊断或治疗需求，请务必咨询合格的医疗服务提供者。
