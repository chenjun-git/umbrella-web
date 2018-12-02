<template>
  <div>
    <Button type="primary">视频上传</Button>
    <br><br>
    <Row :gutter="10">
      <Col span="4">
        <div style="height: 135px;background:rgba(0,153,229,.7)">
          <video src="" controls="controls"></video>
        </div>
        <div><a>小狮子不吼不叫陪娃写作业， 提高成绩必修的作业辅导宝典</a></div>
      </Col>
      
      <Col span="4">
        <div style="height: 135px;background:rgba(0,153,229,.7)">col-4</div>        
        <div><a>小狮子不吼不叫陪娃写作业， 提高成绩必修的作业辅导宝典</a></div>
      </Col>

      <Col span="4">
        <div style="height: 135px;background:rgba(0,153,229,.7)">col-4</div>
        <div><a>小狮子不吼不叫陪娃写作业， 提高成绩必修的作业辅导宝典</a></div>
      </Col>

      <Col span="4">
        <div style="height: 135px;background:rgba(0,153,229,.7)">col-4</div>
        <div><a>小狮子不吼不叫陪娃写作业， 提高成绩必修的作业辅导宝典</a></div>
      </Col>

      <Col span="4">
        <div style="height: 135px;background:rgba(0,153,229,.7)">col-4</div>
        <div><a>小狮子不吼不叫陪娃写作业， 提高成绩必修的作业辅导宝典</a></div>
      </Col>

      <Col span="4">
        <div style="height: 135px;background:rgba(0,153,229,.7)">col-4</div>
        <div><a>小狮子不吼不叫陪娃写作业， 提高成绩必修的作业辅导宝典</a></div>
      </Col>

    </Row>
    <br>
    <Row :gutter="10">
      <Col span="4"><div style="height: 135px;background:rgba(0,153,229,.7)">col-4</div></Col>
      
      <Col span="4"><div style="height: 135px;background:rgba(0,153,229,.7)">col-4</div></Col>

      <Col span="4"><div style="height: 135px;background:rgba(0,153,229,.7)">col-4</div></Col>

      <Col span="4"><div style="height: 135px;background:rgba(0,153,229,.7)">col-4</div></Col>

      <Col span="4"><div style="height: 135px;background:rgba(0,153,229,.7)">col-4</div></Col>

      <Col span="4"><div style="height: 135px;background:rgba(0,153,229,.7)">col-4</div></Col>

    </Row>
    <br>
    <Page :total="100" @on-change="handlePage" @on-page-size-change='handlePageSize'/>
  </div>
</template>

<script>
export default {
  name: 'video-manager'
}
</script>

<style>

</style>
