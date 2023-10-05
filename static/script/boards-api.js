function boardWrite(){

$.ajax({
    "url": "/api/v1/boards",
    "method": "GET",
    "timeout": 0,
}).done(function (list) {
    list.forEach(board => {
        image_url = 'media/noimage.jpeg';
        image_url = board.loaded_file === null ? image_url : board.loaded_file;
        
        $('#boards-container').append(`
        <div class="board">
                <img src="${image_url}">
                <p>
                    <a href="/board/${board.no}"><h4>${board.title}</h4></a>
                    <span>${board.author}</span>
                </p>
            </div>
        `)
    })
});

}

$(document).ready(function() {
    console.log("게시판 목록 조회");
    // 페이지 로드 시 Ajax로 게시물 목록을 가져옵니다.
    $.ajax({
        url: '/api/v1/boards/', // API 엔드포인트 URL을 수정하세요.
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // 가져온 게시물 목록을 표시합니다.
            console.log(data);
            var boardListContainer = $('#boards-container');
            data.forEach(function(board) {
                var image_url = 'media/noimage.jpeg';
                image_url = board.loaded_file === null ? image_url : board.loaded_file;
                var boardHtml = `
                    <div class="board">
                        <img src="${image_url}">
                        <p>
                            <a href="/board/${board.no}"><h4>${board.title}</h4></a>
                            <span>${board.author}</span>
                        </p>
                    </div>
                `;
                boardListContainer.append(boardHtml);
            });
        },
        error: function() {
            alert('게시물을 가져오는 중에 오류가 발생했습니다.');
        }
    });
});
