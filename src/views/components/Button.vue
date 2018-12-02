<template>
  <Row>
    <Col span="24">
      <div style="" class="doc-header">
        <Button>Default</Button>
    	<Button type="primary">Primary</Button>
    	<Button type="ghost">Ghost</Button>
    	<Button type="dashed">Dashed</Button>
    	<Button type="text">Text</Button>
    	<br><br>
    	<Button type="info">信息按钮</Button>
    	<Button type="success">成功按钮</Button>
    	<Button type="warning">警告按钮</Button>
    	<Button type="error">错误按钮</Button>
      </div>

      <div style="" class="doc-content">
        <h5>按钮类型</h5>

        <p>按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
        <p>通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。</p>
      </div>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'buttons'
}
</script>
