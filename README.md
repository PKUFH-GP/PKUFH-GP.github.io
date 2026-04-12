# COPD 静态预测网站

该项目可直接部署到 GitHub Pages。页面为纯前端实现：

- 输入特征：`sex, age, sq2, sq3, sq5, ps5, pef`
- 输出结果：COPD 风险概率、阈值分类结果、个体 SHAP 力图（近似，动态生成）
- 输入字段名称与选项含义：基于 `data/data_info.csv` 对应中文指标说明

## 本地预览

```bash
python3 -m http.server 8000
```

浏览器打开：`http://localhost:8000`

## 部署到 GitHub Pages

1. 把当前目录推送到 GitHub 仓库。
2. 在仓库 `Settings -> Pages` 中：
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main`（或你的默认分支），目录选择 `/ (root)`
3. 保存后等待 1-3 分钟，访问 GitHub Pages 地址即可。

## 文件说明

- `index.html`：页面结构
- `styles.css`：视觉样式
- `app.js`：模型加载与预测逻辑
- `assets/xgboost_model.json`：前端推理使用的 XGBoost 模型

## 注意

该工具用于科研演示，不替代专业临床诊断。
