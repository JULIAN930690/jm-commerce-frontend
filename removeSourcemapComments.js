import fs from 'fs';
import path from 'path';

const directory = path.resolve('node_modules/autolinker/dist/es2015');

function removeSourcemapComment(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const cleaned = content.replace(/\/\/# sourceMappingURL=.*\.map\s*$/gm, '');
  if (content !== cleaned) {
    fs.writeFileSync(filePath, cleaned, 'utf-8');
    console.log(`✔ Limpieza: ${filePath}`);
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (stat.isFile() && fullPath.endsWith('.js')) {
      removeSourcemapComment(fullPath);
    }
  });
}

walk(directory);
console.log('✅ Todos los comentarios de sourcemaps fueron eliminados.');
