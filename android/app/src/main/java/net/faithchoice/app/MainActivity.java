package net.faithchoice.app;

import android.content.Intent;
import com.getcapacitor.BridgeActivity;
import io.capawesome.capacitorjs.plugins.foregroundservice.AndroidForegroundService;

public class MainActivity extends BridgeActivity {
    @Override
    public void onDestroy() {
        // Если приложение смахнули из списка задач во время прослушивания истории, JS-код в app.js
        // (stopBackgroundAudioService при выходе в меню) не успевает выполниться — фоновая служба и
        // её несворачиваемое уведомление оставались висеть навсегда. onDestroy() надёжно вызывается
        // Android при закрытии таска (в отличие от паузы/сворачивания — там служба должна жить, чтобы
        // озвучка продолжалась), поэтому глушим службу явно именно здесь.
        stopService(new Intent(this, AndroidForegroundService.class));
        super.onDestroy();
    }
}
