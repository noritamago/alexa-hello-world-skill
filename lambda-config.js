module.exports = {
  region: 'us-east-1',
  handler: 'index.handler',
  role: 'arn:aws:iam::123456789012:role/lambda_basic_execution',
  functionName: 'HelloWorld',
  timeout: 10,
  memorySize: 128,
  publish: true,
  runtime: 'nodejs4.3'
}
