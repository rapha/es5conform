
var activeSth = new sth(window);

sth.prototype.OpenSourceWindow = function (idx) {
  var ut = this.tests[idx];
  var popWnd = window.open("", "", "scrollbars=1, resizable=1");
  var innerHTML = '';

  innerHTML += '<b>Test </b>';
  if (ut.testObj.id) innerHTML += '<b>' + ut.testObj.id + '</b> <br><br>';
  
 if (ut.description) {
    innerHTML += '<b>Description</b>';
    innerHTML += '<pre>' + this.hmtlEscape(ut.description) + ' </pre>';
  }

  innerHTML += '<b>Testcase</b>';
  innerHTML += '<pre>' + ut.theTestcase + '</pre>';

  if (ut.pre) {
    innerHTML += '<b>Precondition</b>';
    innerHTML += '<pre>' + ut.pre + '</pre>';
  }

  innerHTML += '<b>Path</b>';
  innerHTML += '<pre>' + ut.path + ' </pre>&nbsp';
  popWnd.document.write(innerHTML);
}

sth.prototype.prepareToTest = function (s) {
  this.resultsDiv = document.createElement("div");  
  document.body.appendChild(this.resultsDiv);
  requestedTests;
  for (var i = 0; i < aryTestCasePaths.length; i++) {
    if (aryTestCasePaths[i])requestedTests++;
  }
}

sth.prototype.testline = function(ut) {
    ut.printed = true;
    if (ut.testObj.id) utId=ut.testObj.id;
    else utId=ut.testObj.path.slice(ut.testObj.path.lastIndexOf('/')+1,-3);
    var href = '<span style="color:blue" onclick="activeSth.OpenSourceWindow(' +ut.registrationIndex+');"> [Source] </span>';

    if (ut.res === 'pass') 
      this.println(ut.testObj.id+' '+this.hmtlEscape(ut.description) + ': <span style=\"color:green\">'+ ut.res + '</span>'+ href);
    else 
      this.println(utId+' '+this.hmtlEscape(ut.description) + ': ' + '<span style=\"color:red\">' + ut.res + '</span>' + href);
    }

